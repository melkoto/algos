import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean isIsomorphic(String s, String t) {
        Map<Character, Character> st = new HashMap<>();
        Map<Character, Character> ts = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char sc = s.charAt(i);
            char tc = t.charAt(i);

            if (st.containsKey(sc) && st.get(sc) != tc) {
                return false;
            }

            if (ts.containsKey(tc) && ts.get(tc) != sc) {
                return false;
            }

            st.put(sc, tc);
            ts.put(tc, sc);
        }

        return true;
    }
}

// paper -> title
// bads -> baba
