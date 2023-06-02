async function fetchData() {
    const record = {
        date: Date.now(),
        areaName: 'United Kingdom',
        latestBy: 23523,
        deathNew: 235
    };
    document.getElementById('date').innerHTML = record.date;
    document.getElementById('areaName').innerHTML = record.areaName;
    document.getElementById('latestBy').innerHTML = record.latestBy;
    document.getElementById('deathNew').innerHTML = record.deathNew;
}

fetchData();;