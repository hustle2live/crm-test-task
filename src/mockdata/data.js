const data = [
   {
      Name: 'Jane Cooper',
      Company: 'Microsoft',
      Phone: '(225) 555-0118',
      Email: 'jane@microsoft.com',
      Country: 'United States',
      Status: 'active',
   },
   {
      Name: 'Floyd Miles',
      Company: 'Yahoo',
      Phone: '(205) 555-0100',
      Email: 'floyd@yahoo.com',
      Country: 'Kiribati',
      Status: 'inactive',
   },
   {
      Name: 'Ronald Richards',
      Company: 'Adobe',
      Phone: '(302) 555-0107',
      Email: 'ronald@adobe.com',
      Country: 'Israel',
      Status: 'inactive',
   },
   {
      Name: 'Marvin McKinney',
      Company: 'Tesla',
      Phone: '(252) 555-0126',
      Email: 'marvin@tesla.com',
      Country: 'Iran',
      Status: 'active',
   },
   {
      Name: 'Jerome Bell',
      Company: 'Google',
      Phone: '(629) 555-0129',
      Email: 'jerome@google.com',
      Country: 'Réunion',
      Status: 'active',
   },
   {
      Name: 'Kathryn Murphy',
      Company: 'Microsoft',
      Phone: '(406) 555-0120',
      Email: 'kathryn@microsoft.com',
      Country: 'Curaçao',
      Status: 'active',
   },
   {
      Name: 'Jacob Jones',
      Company: 'Yahoo',
      Phone: '(208) 555-0112',
      Email: 'jacob@yahoo.com',
      Country: 'Brazil',
      Status: 'active',
   },
   {
      Name: 'Kristin Watson',
      Company: 'Facebook',
      Phone: '(704) 555-0127',
      Email: 'kristin@facebook.com',
      Country: 'Åland Islands',
      Status: 'inactive',
   },
];

const dataKeys = [];

const generateUniqueKey = (arr, i = 0) => {
   while (arr.includes(i)) i++;
   return i;
};

export const mockData = data.map((elem) => {
   const uniqueId = generateUniqueKey(dataKeys);
   elem.id = uniqueId;
   dataKeys.push(uniqueId);
   return elem;
});

console.log('mockData', mockData);
