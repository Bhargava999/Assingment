public class Pangram {
    public static boolean isPangram(String str) {
        // Create a boolean array to track the presence of each letter
        boolean[] alphabetPresent = new boolean[26];

        // Convert the input string to lowercase to handle both cases
        str = str.toLowerCase();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            // Check if the character is a lowercase letter
            if (ch >= 'a' && ch <= 'z') {
                alphabetPresent[ch - 'a'] = true;
            }
        }

        // Check if all letters from 'a' to 'z' are present in the array
        for (boolean isPresent : alphabetPresent) {
            if (!isPresent) {
                return false; // If any letter is missing, it's not a pangram
            }
        }

        return true; // All letters are present, so it's a pangram
    }

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
