// faq-item

const faqItemElements = document.querySelectorAll('.faq-item') // FAQ İtemları aldım


const toggleActive = (element) => {
    faqItemElements.forEach(el => el.classList.remove('active'))
    element.classList.toggle('active');
}
// Her bir faq itemi ezicez
faqItemElements.forEach(faqItem => {
    faqItem.addEventListener('click', () => toggleActive(faqItem))
})