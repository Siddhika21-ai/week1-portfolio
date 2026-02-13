// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (!contactForm) return;

    // Form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Validation patterns
    const patterns = {
        name: /^[a-zA-Z\s]{2,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        subject: /^.{3,100}$/,
        message: /^.{10,500}$/
    };

    // Validation messages
    const messages = {
        name: {
            empty: 'Name is required',
            invalid: 'Please enter a valid name (2-50 characters, letters only)'
        },
        email: {
            empty: 'Email is required',
            invalid: 'Please enter a valid email address'
        },
        subject: {
            empty: 'Subject is required',
            invalid: 'Subject must be between 3-100 characters'
        },
        message: {
            empty: 'Message is required',
            invalid: 'Message must be between 10-500 characters'
        }
    };

    // Real-time validation
    nameInput.addEventListener('blur', () => validateField(nameInput, patterns.name, messages.name, nameError));
    emailInput.addEventListener('blur', () => validateField(emailInput, patterns.email, messages.email, emailError));
    subjectInput.addEventListener('blur', () => validateField(subjectInput, patterns.subject, messages.subject, createErrorElement(subjectInput)));
    messageInput.addEventListener('blur', () => validateField(messageInput, patterns.message, messages.message, messageError));

    // Clear error on input
    nameInput.addEventListener('input', () => clearError(nameInput, nameError));
    emailInput.addEventListener('input', () => clearError(emailInput, emailError));
    subjectInput.addEventListener('input', () => clearError(subjectInput, createErrorElement(subjectInput)));
    messageInput.addEventListener('input', () => clearError(messageInput, messageError));

    // Form submission
    // Form submission
    contactForm.addEventListener('submit', function (e) {
        // Native HTML5 validation has already passed if this event fires
        console.log('Form submission triggered');

        try {
            // Show "Sending..." state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true; // Prevent double submission
            }
        } catch (err) {
            console.error('Error in submit handler:', err);
            // Even if UI update fails, allow form to submit
        }

        // We do NOT prevent default
        // The form will now submit naturally to FormSubmit
    });

    // Helper to find or create error element for subject since it might be missing in HTML
    function createErrorElement(input) {
        // In the HTML, nameError etc are assumed to exist. Subject might not have one.
        // Let's check HTML.
        // <input type="text" id="subject" name="subject" required>
        // There is NO error div for subject in the provided HTML snippet.
        // We should just create one dynamically or assume a generic one.
        // But wait, the previous code had:
        // const nameError = document.getElementById('nameError');
        // We need to add an ID for subject error in HTML or handle it here.
        // Since I can't easily change HTML reliably in the same block without context issues, 
        // I'll ensure I target an existing or new element.
        let errorId = input.id + 'Error';
        let errorEl = document.getElementById(errorId);
        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.id = errorId;
            errorEl.className = 'form-error';
            input.parentElement.appendChild(errorEl);
        }
        return errorEl;
    }

    // Field validation function
    function validateField(input, pattern, message, errorElement) {
        const value = input.value.trim();

        if (!value) {
            showError(input, errorElement, message.empty);
            return false;
        }

        if (!pattern.test(value)) {
            showError(input, errorElement, message.invalid);
            return false;
        }

        clearError(input, errorElement);
        return true;
    }

    // Show error
    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
        errorElement.style.display = 'block';

        // Add shake animation
        input.style.animation = 'shake 0.5s';
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    }

    // Clear error
    function clearError(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    // Submit form (Deprecated: handled natively by FormSubmit)
    // function submitForm() { ... }

    // Reset form
    function resetForm() {
        contactForm.reset();

        // Clear all validation states
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
            input.classList.remove('error', 'success');
        });

        // Hide all error messages
        [nameError, emailError, messageError].forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
    }

    // Add shake animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        
        .form-input.error,
        .form-textarea.error {
            border-color: #e53e3e;
            box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
        }
        
        .form-input.success,
        .form-textarea.success {
            border-color: #48bb78;
            box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.1);
        }
        
        .form-error {
            color: #e53e3e;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: none;
        }
        
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);

    // Character counter for message field
    const messageCounter = document.createElement('div');
    messageCounter.className = 'message-counter';
    messageCounter.style.cssText = `
        font-size: 0.75rem;
        color: #718096;
        text-align: right;
        margin-top: 0.25rem;
    `;
    messageInput.parentNode.appendChild(messageCounter);

    messageInput.addEventListener('input', function () {
        const length = this.value.length;
        const maxLength = 500;
        messageCounter.textContent = `${length}/${maxLength} characters`;

        if (length > maxLength) {
            messageCounter.style.color = '#e53e3e';
        } else if (length > 400) {
            messageCounter.style.color = '#ed8936';
        } else {
            messageCounter.style.color = '#718096';
        }
    });

    // Auto-resize textarea
    messageInput.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });

    // Form field focus effects
    const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('focused');
        });
    });

    // Add focus styles
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .form-group.focused .form-input,
        .form-group.focused .form-textarea {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-group {
            position: relative;
        }
        
        .form-group.focused .form-label {
            color: #667eea;
        }
    `;
    document.head.appendChild(focusStyle);

    console.log('Form validation initialized');
});
