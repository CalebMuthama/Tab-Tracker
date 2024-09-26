import Joi from "joi";

const validateCredentials = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
        })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
        .required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error.details);
      const errorMessage = error.details[0].message;
      const key = error.details[0].context.key;
      console.log(errorMessage);

      const errorMessages = {
        email: "You must provide a valid email address",
        password: "Password must be atleast 8 characters long.",
      };

      return res.status(400).send({
        error: errorMessages[key] || "Invalid registration credentials",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({
      error: "Invalid registration information",
    });
  }
};

export default validateCredentials;

// switch (error.details[0].context.key) {
//   case "email":
//     return res.status(400).send({
//       error: "You must provide a valid email address.",
//     });
//   case "password":
//     return res.status(400).send({
//       error: "Password must be 8 characters long",
//     });
//   default:
//     return res.status(400).send({
//       error: "Invalid registration information",
//     });
// }
