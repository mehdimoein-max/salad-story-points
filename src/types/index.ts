export interface Fruit {
  id: string;
  emoji: string;
  name: string;
}

export interface GameSession {
  id: string;
  groupName: string;
  selectedFruits: Fruit[];
  votes: Record<string, number>;
  totalPoints: number;
  velocity?: number;
  date: string;
}

export type Votes = Record<string, number>;

export const STORY_POINTS = [1, 2, 3, 5, 8, 13, 20, 40, 100, 200] as const;

export const FRUITS: Fruit[] = [
  { id: 'apple', emoji: '🍎', name: 'سیب' },
  { id: 'banana', emoji: '🍌', name: 'موز' },
  { id: 'orange', emoji: '🍊', name: 'پرتقال' },
  { id: 'grape', emoji: '🍇', name: 'انگور' },
  { id: 'watermelon', emoji: '🍉', name: 'هندوانه' },
  { id: 'strawberry', emoji: '🍓', name: 'توت فرنگی' },
  { id: 'cherry', emoji: '🍒', name: 'گیلاس' },
  { id: 'peach', emoji: '🍑', name: 'هلو' },
  { id: 'pineapple', emoji: '🍍', name: 'آناناس' },
  { id: 'kiwi', emoji: '🥝', name: 'کیوی' },
  { id: 'mango', emoji: '🥭', name: 'انبه' },
  { id: 'lemon', emoji: '🍋', name: 'لیمو' },
  { id: 'pear', emoji: '🍐', name: 'گلابی' },
  { id: 'melon', emoji: '🍈', name: 'طالبی' },
  { id: 'coconut', emoji: '🥥', name: 'نارگیل' },
  { id: 'avocado', emoji: '🥑', name: 'آووکادو' },
  { id: 'pomegranate', emoji: '🍒', name: 'انار' },
  { id: 'blueberry', emoji: '🫐', name: 'بلوبری' },
];
