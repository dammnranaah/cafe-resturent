export type MenuItem = {
  name: string
  description: string
  price: string
  image: string
  special?: boolean
}

export const menu: Record<string, MenuItem[]> = {
  starters: [
    { name: 'Shingara', description: 'Crispy pastry stuffed with spiced potato and peas', price: '৳90', image: 'https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg' },
    { name: 'Beguni', description: 'Thin sliced eggplant fritters coated in gram flour', price: '৳80', image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Chicken Pakora', description: 'Lightly spiced chicken dipped in gram batter, deep fried', price: '৳140', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop' }
  ],
  mains: [
    { name: 'Kacchi Biryani', description: 'Fragrant basmati rice with marinated mutton, kewra and saffron', price: '৳380', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop', special: true },
    { name: 'Ilish Bhapa', description: 'Hilsa steamed in mustard paste with yogurt and green chili', price: '৳420', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Bhuna Khichuri', description: 'Comforting spiced rice and lentil mix, slow-cooked', price: '৳260', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop' }
  ],
  desserts: [
    { name: 'Mishti Doi', description: 'Caramelized sweet yogurt made from reduced milk', price: '৳120', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Rasgulla', description: 'Soft chhena balls soaked in light sugar syrup', price: '৳110', image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Patishapta Pitha', description: 'Thin crepes filled with date molasses and coconut', price: '৳130', image: 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg' }
  ],
  drinks: [
    { name: 'Masala Chai', description: 'Milk tea infused with cardamom, cinnamon and ginger', price: '৳60', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop', special: true },
    { name: 'Sweet Lassi', description: 'Chilled yogurt drink with milk and sugar', price: '৳90', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Green Coconut Water', description: 'Fresh tender coconut water, naturally cooling', price: '৳80', image: 'https://images.pexels.com/photos/1028411/pexels-photo-1028411.jpeg' }
  ],
}
