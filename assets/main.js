var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      //type: 'bar',
      type: 'pie',
      data: {
        labels: ["Attente", "Analyse", "Reception", "Refusee"],
        datasets: [{
          label: 'Qte',
          data: [1200, 2500, 3450, 500],
          backgroundColor: ['#007bff','#ff4444','#00C851','#ffbb33'],
          borderColor: ['#007bff','#ff4444','#00C851','#ffbb33'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });