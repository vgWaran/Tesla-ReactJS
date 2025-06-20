document.addEventListener('DOMContentLoaded', () => {
  const data = {
    title: 'Find Your Charge',
    subtitle:
      'View the network of Tesla Superchargers and Destination Chargers available near you.',
    buttons: [
      { text: 'View Network',   cls: 'btn-primary' },
      { text: 'Learn More',     cls: 'btn-outline-secondary' }
    ],
    stats: [
      {
        img: 'bolt.png',           // your red-bolt icon
        number: '31,311',
        label: 'Superchargers'
      },
      {
        img: 'plug.png',           // your gray-plug icon
        number: '10,429',
        label: 'Destination Chargers'
      }
    ]
  };

  const container = document.getElementById('charge-section');
  container.innerHTML = `
    <section class="charge-section py-5">
      <div class="container">
        <div class="row align-items-center">
          
          <!-- left half -->
          <div class="col-md-6 mb-4 mb-md-0">
            <h2 class="fw-bold mb-3">${data.title}</h2>
            <p class="lead mb-4">${data.subtitle}</p>
            <div class="btn-group">
              ${data.buttons
                .map(b => `<button class="btn ${b.cls}">${b.text}</button>`)
                .join('')}
            </div>
          </div>

          <!-- right half -->
          <div class="col-md-6">
            <div class="row">
              ${data.stats
                .map(s => `
                <div class="col-6 d-flex align-items-center mb-3">
                  <img src="${s.img}" class="stat-icon me-3" alt="${s.label}" />
                  <div>
                    <div class="stat-number">${s.number}</div>
                    <div class="text-muted">${s.label}</div>
                  </div>
                </div>
              `)
                .join('')}
            </div>
          </div>
        
        </div>
      </div>
    </section>
  `;
});
