/**
 * Parse URL as per provided values like string, number, boolean, object and array
 * @param obj
 */
type Primitive = string | number | boolean;
export interface QueryObject {
  [key: string]: Primitive | Primitive[] | { [key: string]: string } | null;
}

export interface NestedObject {
  [key: string]: Primitive | Primitive[] | NestedObject | null;
}

export const parseUrl = (Obj: QueryObject = {}, key: string = ""): string => {
    const arrayUrl: string[] = [];

    // Helper function to handle nested objects
    const handleNestedObject = (obj: NestedObject, parentKey: string): string => {
        return Object.keys(obj)
            .map(subKey => {
                const fullKey = parentKey ? `${parentKey}[${subKey}]` : subKey;
                const value = obj[subKey];

                if (
                    typeof value === "object" &&
          !Array.isArray(value) &&
          value !== null
                ) {
                    // Recursive call for nested objects

                    return handleNestedObject(value as NestedObject, fullKey);
                } else if (Array.isArray(value)) {
                    // Handle array
                    return value

                        .map(item => `${fullKey}[]=${encodeURIComponent(String(item))}`)
                        .join("&");
                } else if (value !== null) {
                    // Handle primitive types
                    return `${fullKey}=${encodeURIComponent(String(value))}`;
                } else {
                    // Handle null value
                    return `${fullKey}=`;
                }
            })
            .join("&");
    };

    // Trimming and processing the search object
    const trimSearchObject = Object.keys(Obj).reduce(
        (acc: { [key: string]: string }, curr: string) => {
            const value = Obj[curr];
            if (value) {
                if (
                    typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean"
                ) {
                    acc[curr] =
            typeof value === "string" ? value.trim() : value.toString();
                } else if (Array.isArray(value)) {
                    const myArrayQry = value
                        .map(el => `${curr}[]=${encodeURIComponent(el)}`)
                        .join("&");
                    if (myArrayQry) {
                        arrayUrl.push(myArrayQry);
                    }
                } else if (typeof value === "object" && value !== null) {
                    if (key && curr === key) {
                        // Handle specific key for object
                        const nestedQuery = handleNestedObject({ [key]: value }, "");
                        if (nestedQuery) {
                            arrayUrl.push(nestedQuery);
                        }
                    } else if (!key) {
                        // Handle all keys if no specific key is provided
                        const nestedQuery = handleNestedObject(value, curr);
                        if (nestedQuery) {
                            arrayUrl.push(nestedQuery);
                        }
                    }
                }
            }
            return acc;
        },
        {}
    );

    // Generate the query string
    const finalArrayUrl = arrayUrl.join("&");
    let convertUrl = new URLSearchParams(trimSearchObject).toString();
    if (convertUrl) {
        convertUrl = `${convertUrl}`;
    }

    return `${convertUrl}${finalArrayUrl ? `&${finalArrayUrl}` : ""}`;
};