const elPersonSpeed = document.querySelector('.person');
const elBicycleSpeed = document.querySelector('.bicycle');
const elCarSpeed = document.querySelector('.car');
const elPlaneSpeed = document.querySelector('.plane');
const elBtn = document.querySelector('.btn');
const elInput = document.querySelector('.input')
const personSpeed = 3.6;
const bicycleSpeed = 20.1;
const carSpeed = 70;
const planeSpeed =800;
elBtn.addEventListener('click', function(){
    const speed = elInput.value;
    const totalHours = speed / personSpeed;
    const hours = Math.floor(totalHours);
    const totalMinutes = (totalHours - hours)*60;
    const minutes = Math.floor(totalMinutes);
    const seconds = Math.floor((totalMinutes - minutes)*60);
    const result = `${hours} hour, \n ${minutes} minutes, \n ${seconds} seconds`
    elPersonSpeed.textContent = result

    const bicycleTotalHours = speed / bicycleSpeed;
    const bicycleHours = Math.floor(bicycleTotalHours);
    const bicycleTotalMinutes = (bicycleTotalHours - bicycleHours)*60;
    const bicycleMinutes = Math.floor(bicycleTotalMinutes);
    const bicycleSeconds = Math.floor((bicycleTotalMinutes - bicycleMinutes)*60);
    const bicycleResult = `${bicycleHours} hour, \n ${bicycleMinutes} minutes, \n ${bicycleSeconds} seconds`
    elBicycleSpeed.textContent = bicycleResult

    const carTotalHours = speed / carSpeed;
    const carHours = Math.floor(carTotalHours);
    const carTotalMinutes = (carTotalHours - carHours)*60;
    const carMinutes = Math.floor(carTotalMinutes);
    const carSeconds = Math.floor((carTotalMinutes - carMinutes)*60);
    const carResult = `${carHours} hour, \n ${carMinutes} minutes, \n ${carSeconds} seconds`
    elCarSpeed.textContent = carResult

    const planeTotalHours = speed / planeSpeed;
    const planeHours = Math.floor(planeTotalHours);
    const planeTotalMinutes = (planeTotalHours - planeHours)*60;
    const planeMinutes = Math.floor(planeTotalMinutes);
    const planeSeconds = Math.floor((planeTotalMinutes - planeMinutes)*60);
    const planeResult = `${planeHours} hour, \n ${planeMinutes} minutes, \n ${planeSeconds} seconds`
    elPlaneSpeed.textContent = planeResult
})