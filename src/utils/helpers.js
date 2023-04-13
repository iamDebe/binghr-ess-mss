import Cookies from 'js-cookie';

export const createWrapperAndAppendToBody = (wrapperId) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
};

export const decryptToken = async () => {
  // Retrieve the encrypted token and IV from the cookie
  const encryptedTokenBase64 = Cookies.get('token');
  const ivBase64 = Cookies.get('iv');

  if (encryptedTokenBase64 && ivBase64) {
    try {
      // Decode the encrypted token and IV from base64
      const encryptedTokenBytes = new Uint8Array(atob(encryptedTokenBase64).split('').map(c => c.charCodeAt(0)));
      const ivBytes = new Uint8Array(atob(ivBase64).split('').map(c => c.charCodeAt(0)));

      // Generate a key from a password (replace this with your own password!)
      const password = import.meta.env.VITE_TOKEN_PASS;
        const key = await window.crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(password),
        { name: 'PBKDF2' },
        false,
        ['deriveBits', 'deriveKey']
      );
      const derivedKey = await window.crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: new Uint8Array(16), iterations: 100000, hash: 'SHA-256' },
        key,
        { name: 'AES-GCM', length: 256 },
        true,
        ['decrypt']
      );

      // Decrypt the encrypted token using AES-GCM with the generated key and IV
      const decryptedTokenBytes = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: ivBytes },
        derivedKey,
        encryptedTokenBytes
      );

      // Convert the decrypted token back to a string
      return  new TextDecoder().decode(decryptedTokenBytes);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return null;
}

export const validateForm = (formData, validationRules) => {
  const errors = {};
  for (const field in validationRules) {
    const rules = validationRules[field];
    const value = formData.get(field);

    // Check if the field is required
    if (rules.required && !value) {
      errors[field] = `${field} is required`;
    }

    // Check if the field matches a regex pattern
    if (rules.pattern && value && !rules.pattern.test(value)) {
      errors[field] = `${field} is invalid`;
    }
  }
  return errors;
};

export const getFirstLetter = (text) => {
  return text ? text.charAt(0).toUpperCase() : '';
}

export const capitalize = (text) => {
  return text.replace(/_/g, ' ').replace(/^\w|\s\w/g, c => c.toUpperCase())
}

export const formatDate = (dateString) => {
  const [year, month, day] = dateString.split(/[-/]/);
  const date = new Date(year, month - 1, day);
  const dayNumber = date.getDate();
  const monthName = date.toLocaleString('default', { month: 'short' });
  const suffix = getDaySuffix(dayNumber);
  const formattedDate = `${monthName} ${dayNumber}${suffix}, ${date.getFullYear()}`;
  return formattedDate;
}

const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  } else {
    const lastDigit = day % 10;
    if (lastDigit === 1) {
      return 'st';
    } else if (lastDigit === 2) {
      return 'nd';
    } else if (lastDigit === 3) {
      return 'rd';
    } else {
      return 'th';
    }
  }
}

const getTotalTax = (payrolls) => {
  if (payrolls) {
    let totalAmount = 0;
    payrolls?.breakdown.forEach(item => {
      if (item.name === "Federal Tax" || item.name === "State Tax") {
        totalAmount += parseFloat(item.amount);
      }
    });

    return totalAmount;
  }
};

export const calculateNet = (payrolls) => {
  if (payrolls) {
    return parseInt(payrolls?.total) - getTotalTax(payrolls);
  }
};

export const calculateTaxes = (payrolls) => {
  if (payrolls) {
    return getTotalTax(payrolls);
  }
};

export const calculateOtherDeduction = (payrolls) => {
  if (payrolls) {
    let totalAmount = 0;
    payrolls?.breakdown.forEach(item => {
      if (item.type === "deduction" && (item.name !== "Federal Tax" && item.name !== "State Tax")) {
        totalAmount += parseFloat(item.amount);
      }
    });

    return totalAmount;
  }
};

export const calculateTotalDeductions = (payrolls) => {
 if (payrolls) {
   let totalAmount = 0;
   payrolls?.breakdown.forEach(item => {
     if (item.type === "deduction") {
       totalAmount += parseFloat(item.amount);
     }
   });

   return totalAmount;
 }
};

export const calculatPercentage = (payrolls, value) => {
  if (payrolls) {
    const total = calculateNet(payrolls) + calculateTotalDeductions(payrolls) + payrolls.total + calculateTaxes(payrolls);
    const percentage = (value / total) * 100;

    return `${percentage.toFixed(2)}%`;
  }
};
