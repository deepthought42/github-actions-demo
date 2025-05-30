/**
 * A simple greeting function
 * @param name - The name to greet
 * @returns A greeting message
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * A function to check if a string is empty
 * @param str - The string to check
 * @returns True if the string is empty, false otherwise
 */
export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
} 