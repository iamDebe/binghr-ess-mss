        
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

          const todayData = () => {
            const today = new Date();
            const this_date = today.getDate();
            const this_day = days[today.getDay()-1];
            const this_month = months[today.getMonth()];
            const this_year = today.getFullYear();
            return {
                day: this_day,
                date: this_date,
                month: this_month,
                year: this_year
            };
        }

          export const calendarData = () => {
            const dateArray = [];

            for (let i = -365; i < 365; i++) {
                const fullDate = new Date();
                fullDate.setDate(fullDate.getDate()+i)*1000;
                const year = fullDate.getFullYear();
                const month = fullDate.getMonth();
                const month_name = months[month];
                const date = fullDate.getDate();
                const day = days[fullDate.getDay() ];
                // days[fullDate.getDay() === 0 ] ? days[fullDate.getDay() ] : 
               
                dateArray.push({
                    year: year,
                    month:month_name,
                    date:date,
                    day:day,
                    fullDate:fullDate

                });
                
            }
            
            return dateArray;
        }
        
        
        const getCalendar = calendarData();

        const today = todayData(); 

        const getCurrentMonth = (date) => {
            return date.month == today.month && date.year == today.year;
        }

        const getCurrentDate = () => {
           return  getCalendar.year == today.year && getCalendar.month == today.month && getCalendar.day == today.day;
        }

        export const currentMonth = getCalendar.filter(getCurrentMonth);
        export const currentDate = getCalendar.filter(getCurrentDate);