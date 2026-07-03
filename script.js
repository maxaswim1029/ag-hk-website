const form = document.getElementById('request-form');
const note = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    note.textContent = '';
    note.style.color = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        note.textContent = 'Thank you — we received your request and will get back to you within one business day.';
        note.style.color = '#2E7D32';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      note.textContent = 'Something went wrong. Please email us directly at aghklimited@gmail.com.';
      note.style.color = '#B3261E';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit request';
    }
  });
}
