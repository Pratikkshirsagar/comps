import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'Can I use React in a project',
      content: 'Yes you can',
    },
    {
      id: 2,
      label: 'Can I use Angular in a project',
      content: 'Yes you can',
    },
    {
      id: 3,
      label: 'Can I use Vue in a project',
      content: 'Yes you can',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
