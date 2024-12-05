const response = await fetch("https://app.nocodb.com/api/v2/tables/m7w29ys11yjrtsv/records",
  {
    method: 'GET',
    headers: {
    'xc-token': 'RzPMz79xLsGvt0YBpZ-XnQ0YGIBeFtzx10oW-rvT'
    },
  });

const json = await response.json();
console.log(json.list[0].namaundangan);
