type ValidationResult = {
  isValid: boolean;
  message: string | null;
};


export function validate(name: string, email: string, message: string): ValidationResult {

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (trimmedName === '' || trimmedEmail === '' || trimmedMessage === '') {
    return {
      isValid: false,
      message: 'All fields are required.'
    };
  }

  
  const nameRegex = /^[a-zA-Z\s-]+$/;
  if (!nameRegex.test(trimmedName)) {
    return {
      isValid: false,
      message: 'Please enter a valid name (letters, spaces, and hyphens only).'
    };
  }

  if (trimmedName.length < 2 || trimmedName.length > 50) {
    return {
      isValid: false,
      message: 'Name must be between 2 and 50 characters.'
    };
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(trimmedEmail);
  if (!isValidEmail) {
    return {
      isValid: false,
      message: 'Please enter a valid email address.'
    };
  }

  if (trimmedMessage.length < 10 || trimmedMessage.length > 500) {
    return {
      isValid: false,
      message: 'Message must be between 10 and 500 characters.'
    };
  }

  return {
    isValid: true,
    message: null
  };
}
