export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email é obrigatório.";
  } else if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(values.email)) {
    errors.email = "Email é inválido.";
  }

  if (!values.password) {
    errors.password = "Senha é obrigatória.";
  } else if (values.password.length < 6) {
    errors.password = "Senha precisa ter no mínimo 6 caracteres.";
  }

  return errors;
}
