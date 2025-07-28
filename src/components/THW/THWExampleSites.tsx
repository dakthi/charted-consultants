'use client';

export const THWExampleSites = () => {
  const sites = [
    {
      name: 'Lou, Private Nail Studio',
      img: '/img/example-lou.png',
      url: 'https://lou.blazingstar.uk',
    },
    {
      name: 'Memoir Saigon Bakery Café',
      img: '/img/example-memoir.png',
      url: 'https://memoirsaigon.com',
    },
    {
      name: 'Charted Consultants (This Site)',
      img: '/img/example-charted.png',
      url: 'https://charted.consulting',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">See What We’ve Built</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {sites.map((site, i) => (
          <a
            key={i}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border rounded-md overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={site.img}
              alt={site.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <p className="text-lg font-medium text-gray-800">{site.name}</p>
              <p className="text-sm text-gray-500">{site.url.replace(/^https?:\/\//, '')}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
