export const login = {
  schema: {
    title: 'Login',
    type: 'object',
    required: ['email', 'password'],
    submitButton: 'Login',
    cancelButton: 'Cancel',
    properties: {
      email: {
        type: 'string',
        title: 'Email',
        placeholder: 'Email address'
      },
      password: { type: 'string', title: 'Password' }
    }
  },
  uiSchema: {
    email: {
      'ui:widget': 'email',
      'ui:autofocus': true,
      'ui:help': 'Please enter a valid email address'
    },
    password: {
      'ui:widget': 'password'
    }
  }
};

export const forgot = {
  schema: {
    title: 'Forgot your password',
    type: 'object',
    required: ['email'],
    submitButton: 'Reset my password',
    cancelButton: 'Cancel',
    properties: {
      email: {
        type: 'string',
        title: 'Email',
        placeholder: 'Email address'
      }
    }
  },
  uiSchema: {
    email: {
      'ui:widget': 'email',
      'ui:autofocus': true,
      'ui:help': 'Please enter your email address'
    }
  }
};

export const change = {
  schema: {
    title: 'Change your password',
    type: 'object',
    required: ['current_password'],
    submitButton: 'Change password',
    cancelButton: 'Cancel',
    properties: {
      current_password: {
        type: 'string',
        title: 'Current password',
        placeholder: 'Current password'
      }
    }
  },
  uiSchema: {
    email: {
      'ui:widget': 'email',
      'ui:autofocus': true,
      'ui:help': 'Please enter your email address'
    }
  }
};

export const create = {
  schema: {
    title: 'Create user',
    type: 'object',
    required: ['email'],
    submitButton: 'Create user',
    cancelButton: 'Cancel',
    properties: {
      email: {
        type: 'string',
        title: 'Email'
      },
      role: {
        type: 'number',
        title: 'Type of user',
        enum: [1, 2, 3],
        enumNames: ['Facilitator', 'Organisation', 'Beneficiary']
      },
      email_notify: {
        type: 'boolean',
        title: 'Notify via email?'
      }
    }
  },
  uiSchema: {
    email: {
      'ui:widget': 'email',
      'ui:autofocus': true
    },
    role: {
      'ui:widget': 'select',
      'ui:placeholder': 'Select'
    }
  }
};
