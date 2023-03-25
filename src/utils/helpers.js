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
}
