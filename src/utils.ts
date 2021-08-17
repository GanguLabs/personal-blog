/**
 * ! SOURCE: https://github.com/Arcath/utils
 */

/**
 * Works the same as `Partial<T>` except it applies `Partial` to sub elements.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

interface AsyncForEachOptions {
  /** Use the legacy style for look for itterations, when false this is a wrapper for `Promise.all`
   * Defaults to `false`
   */
  inSequence: boolean;
}

const defaultOptions: AsyncForEachOptions = {
  inSequence: false,
};

/**
 * Deeply applies defaults to an object.
 *
 * @param supplied The supplied options, a `DeepPartial` of `defaultValues`.
 * @param defaultValues The default values to fallback on. Should represent a full copy of the options object.
 */
//eslint-disable-next-line
export const defaults = <T extends {}>(
  supplied: DeepPartial<T> | undefined,
  defaultValues: T
) => {
  const result: T = { ...defaultValues };

  Object.keys(supplied ?? {}).forEach((key) => {
    if (typeof (defaultValues as { [key: string]: string })[key] === "object") {
      (result as { [key: string]: string })[key] = defaults(
        //eslint-disable-next-line
        (supplied as any)[key],
        (defaultValues as { [key: string]: string })[key]
      );

      return;
    }

    //eslint-disable-next-line
    (result as { [key: string]: string })[key] = (supplied as any)[key];
  });

  return result;
};

/**
 * Runs the supplied itterator for all elements in the array asyncronously.
 *
 * @param array The array to itterate through.
 * @param itterator The async function to run for each element.
 */
export const asyncForEach = async <T>(
  array: T[],
  itterator: (value: T, index: number, array: T[]) => Promise<void>,
  options?: DeepPartial<AsyncForEachOptions>
): Promise<void> => {
  const { inSequence } = defaults(options, defaultOptions);

  if (inSequence) {
    console.warn(
      "in sequence is going to be removed in the future, for 1.x it is default off."
    );
    for (let index = 0; index < array.length; index++) {
      //eslint-disable-next-line
      await itterator(array[index], index, array);
    }

    return;
  }

  const promises = array.map((value, index, arr) =>
    itterator(value, index, arr)
  );

  await Promise.all(promises);
};

export function parseDate(input, format?) {
  format = format || "dd.mm.yyyy"; // default format
  const parts = input.match(/(\d+)/g);
  let i = 0;
  const fmt = {};
  // extract date-part indexes from the format
  format.replace(/(yyyy|dd|mm)/g, function (part: string) {
    fmt[part] = i++;
  });

  return new Date(parts[fmt["yyyy"]], parts[fmt["mm"]] - 1, parts[fmt["dd"]]);
}

export function getLocaleString(input, format, locale) {
  const parsedDate = parseDate(input, format);

  return parsedDate.toLocaleString(locale, {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
}
