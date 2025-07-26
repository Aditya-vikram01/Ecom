const footerLinks = [
  {
    title: 'Resources',
    links: [
      'Find a Store',
      'Nike Journal',
      'Become a Member',
      'Feedback',
      'Promo Codes',
    ],
  },
  {
    title: 'Help',
    links: [
      'Get Help',
      'Order Status',
      'Shipping and Delivery',
      'Returns',
    ],
  },
  {
    title: 'Company',
    links: [
      'About us',
      'News',
      'Careers',
      'Investors',
      'Purpose',
      'Sustainability',
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {footerLinks.map((section) => (
          <ul key={section.title}>
            <li className="font-medium mb-2">{section.title}</li>
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="cursor-pointer hover:underline block py-1">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
