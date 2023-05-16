import unittest
from wb import multiples as solution



class TestSumOfMultiples(unittest.TestCase):
    def test_solution(self):
        self.assertEqual(solution(10), 23)
        self.assertEqual(solution(20), 78)
        self.assertEqual(solution(-5), 0)
        self.assertEqual(solution(0), 0)
        self.assertEqual(solution(1), 0)
        self.assertEqual(solution(3), 0)
        self.assertEqual(solution(5), 3)

if __name__ == '__main__':
    unittest.main()