type ClassName = string | Record<string, boolean>;

const cn = (...classes: ClassName[]): string => {
  return classes.reduce<string>((acc, className) => {
    if (typeof className === "string") {
      return acc + className + " ";
    }

    if (typeof className === "object") {
      for (const classNameProp in className) {
        if (className[classNameProp] === true) {
          acc += classNameProp + " ";
        }
      }
    }

    return acc;
  }, "").trimEnd();
};

export default cn;
