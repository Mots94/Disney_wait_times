import chartsEmbedDom from '@mongodb-js/charts-embed-dom'

const sdk = new chartsEmbedDom({
    baseUrl: "https://charts.mongodb.com/charts-disney-final-project-data-tsfdz"
});

const waitTimes = sdk.createChart({
    chartId: "62f5b63e-cf58-4ecf-8d84-4546c9919038",
});
const avgTemp = sdk.createChart({
    chartId: "62f5bbe6-3530-443d-88b5-ac874e0c7c5a",
});
const avgPrecip = sdk.createChart({
    chartId: "62f5bc43-fdf6-4b83-84f2-17a638b49b58",
});

waitTimes.render(document.getElementById('waitTimes'));
avgTemp.render(document.getElementById('avgTemp'));
avgPrecip.render(document.getElementById('avgPrecip'));

const dateSelect = document.getElementById('dateSelect');
dateSelect.addEventListener("change", async (e) => 
    { if (dateSelect.value == "")
        { waitTimes.setFilter({})};
        { avgPrecip.setFilter({})};
        { avgTemp.setFilter({})}
    };
    else {
        waitTimes.setFilter({dateSelect.value});
        avgPrecip.setFilter({dateSelect.value});
        avgTemp.setFilter({dateSelect.value});
    } );