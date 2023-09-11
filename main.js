     const batteryTimeElement = document.getElementById("batteryTime");
        const powerElement = document.getElementById("power");
        const uzbekistanTimeElement = document.getElementById("uzbekistanTime");

        let batteryTime = "24 soat";
        let power = "10 Vatt";

        batteryTimeElement.textContent = batteryTime;
        powerElement.textContent = power;

        function updateUzbekistanTime() {
            const uzbekistanTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tashkent" });
            uzbekistanTimeElement.textContent = uzbekistanTime;
        }


        function calculatePowerConsumption() {

            const batteryCapacity = 10000; 
            const additionalPowerConsumption = 500; 
            
            const currentPower = batteryCapacity - additionalPowerConsumption;

            powerElement.textContent = `${currentPower} mAh`;
        }

        setInterval(updateUzbekistanTime, 1000);
        setInterval(calculatePowerConsumption, 1000);

        updateUzbekistanTime();
        calculatePowerConsumption();