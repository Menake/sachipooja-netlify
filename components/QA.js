const faqs =
    [
        {
            question: 'What are the agenda details for the wedding, considering COVID-19?',
            answer: 'We are currently waiting to find out what the COVID-19 announcments will reveal around lockdown levels. We will keep you informed about decisions around the wedding contingent on these announcements.'
        },
        {
            question: 'Am I able to bring a plus one to the wedding?',
            answer: 'While we would love to celebrate with your loved ones, if we have not addressed your plus one as a name on the invitation card, unfortunately due to the capacity of our venue, we will not be able to extend the invite.'
        },
        {
            question: 'What should I wear to the wedding?',
            answer: 'We request that you wear formal attire to the wedding, i.e. suit, tie and dresses or formal traditional clothing i.e. kurta, sari etc.'
        },
        {
            question: 'Is there parking available?',
            answer: 'Yes, there will be parking available on-site.'
        },
        {
            question: 'Do you have a gift registry?',
            answer: 'We will be in touch with you around this closer to the date of the wedding.'
        },
        {
            question: 'What is the RSVP deadline?',
            answer: 'Due to COVID we are allowing RSVP\'s until the end of Friday 3 October. Please RSVP by then so that we may continue with catering preperations and table arrangements.'
        },
        {
            question: 'Where and when will the events be held?',
            answer: 'Please refer to the RSVP details for location and start and end times of events. They will be held indoors. '
        },
        {
            question: 'Do you have any agenda details available?',
            answer: 'These are currently still being worked on considering the current issue with COVID 19, however we will be looking to release a program shortly indicating when to arrive, when food and drinks are served as well as specific ceremonial times.'
        },
        {
            question: 'What if I have more questions?',
            answer: 'Please feel free to contact Sachi or Pooja for any further clarifications or questions that you may have.'
        }
    ]

export const QA = () => {
    const faqElements = faqs.map(faq => (
        <div className="mt-10">
            <div className='text-secondary font-semibold text-lg'>{faq.question}</div>
            <div className='mt-5 text-primary'>{faq.answer}</div>
        </div>
    ))

    return (<div className='pb-10 md:pt-32 xl:pb-20 relative w-4/5 mx-auto mb-6 max-w-5xl'>
        <h1 className="font-semibold text-2xl md:text-4xl text-secondary">Questions & <span className="text-primary">Answers</span></h1>
        {faqElements}
    </div>)
}