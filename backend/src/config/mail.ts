interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'equipe@ensinocognitivo.com.br',
      name: 'Equipe Ensino Cognitivo',
    },
  },
} as IMailConfig;
