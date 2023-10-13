
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShuffleAnArray {
    public static void main(String[] args) {
        // Create a list with the values
        List<Integer> myList = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7));

        // Shuffle the list
        Collections.shuffle(myList);

        // Convert the shuffled list back to an array if needed
        Integer[] shuffledArray = myList.toArray(new Integer[0]);

        // Print the shuffled array
        for (int number : shuffledArray) {
            System.out.print(number + " ");
        }
    }
}
