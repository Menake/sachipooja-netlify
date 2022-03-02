const ceremonyQA =
    [
        {
            question: 'What should I wear?',
            answer: 'Formal attire or traditional wear would be perfect!'
        },
        {
            question: 'What is the RSVP deadline? ',
            answer: 'By the 2nd of March please.'
        },
        {
            question: 'Is there parking available? ',
            answer: 'There are about 40 spots to park onsite but an abundance of roadside parking along Wentworth Avenue, Papatoetoe.'
        },
        {
            question: 'What type of food and drinks will be served?',
            answer: 'Indian food, we will begin with welcome drinks and snacks and have an Indian buffet with many items being served.'
        },
        {
            question: 'Will the ceremony be held indoors?',
            answer: 'Yes, the ceremony will be held on the top floor of our venue.'
        },
        {
            question: 'Is there a gifts registry?',
            answer: 'Your presence means the world to us and you do not need to get us a gift, however, should you wish to bless us with a gift, we will have a wishing well at our event.'
        },
        {
            question: 'What if I have more questions? ',
            answer: 'Get in touch with us 😊 Pooja (021 268 2257) and Sachintha (021 027 11157).'
        }
    ]

const receptionQA =
    [
        {
            question: 'What should I wear?',
            answer: 'Formal attire 😊'
        },
        {
            question: 'What is the RSVP deadline? ',
            answer: 'By the 2nd of March please'
        },
        {
            question: 'Is there parking available? ',
            answer: 'Yes at the entrance of the venue.'
        },
        {
            question: 'What type of food and drinks will be served?',
            answer: 'Indian & Sri Lankan style food will be served, we will have alcoholic and non-alcoholic beverages served also.'
        },
        {
            question: 'Will the ceremony be held indoors?',
            answer: 'Yes mostly, but there is space outside for guests to mingle.'
        },
        {
            question: 'Is there a gifts registry?',
            answer: 'Your presence means the world to us and you do not need to get us a gift, however, should you wish to bless us with a gift, we will have a wishing well at our event.'
        },
        {
            question: 'What if I have more questions? ',
            answer: 'Get in touch with us 😊 Pooja (021 268 2257) and Sachintha (021 027 11157).'
        }
    ]

const QA = ({ qas, title, className }) => {
    const faqElements = qas.map((faq, idx) => (
        <div key={idx} className="mt-10">
            <div className='text-secondary font-semibold text-lg'>{faq.question}</div>
            <div className='mt-5 text-primary'>{faq.answer}</div>
        </div>
    ))

    return (
        <div className={className}>
            <h1 className="font-semibold text-2xl md:text-4xl text-secondary ">{title} Questions & <span className="text-primary">Answers</span></h1>
            {faqElements}
        </div>
    )
}

export const ReceptionQA = () => <QA qas={receptionQA} title='Reception' />
export const CeremonyQA = ({ className }) => <QA qas={ceremonyQA} title='Ceremony' className={className} />












