export type MenuItem = {
  name: string
  description: string
  price: string
  image: string
  special?: boolean
}

export const menu: Record<string, MenuItem[]> = {
  starters: [
    { name: 'Bruschetta', description: 'Tomato, basil, garlic on toasted sourdough', price: '$8', image: 'https://images.unsplash.com/photo-1546549039-Ex1?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Pumpkin Soup', description: 'Creamy roasted pumpkin, nutmeg, chive oil', price: '$9', image: 'https://images.unsplash.com/photo-1476127396946-eca0d210a253?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Caprese Salad', description: 'Heirloom tomatoes, buffalo mozzarella, pesto', price: '$10', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop' }
  ],
  mains: [
    { name: 'Herb Chicken', description: 'Grilled chicken, rosemary jus, roasted potatoes', price: '$18', image: 'https://images.unsplash.com/photo-1604908177522-040a3b39a2b8?q=80&w=1200&auto=format&fit=crop', special: true },
    { name: 'Mushroom Risotto', description: 'Porcini mushrooms, parmesan, truffle oil', price: '$17', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Seared Salmon', description: 'Citrus glaze, quinoa, seasonal greens', price: '$20', image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1200&auto=format&fit=crop' }
  ],
  desserts: [
    { name: 'Cheesecake', description: 'Vanilla bean, berry compote', price: '$8', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Tiramisu', description: 'Espresso-soaked ladyfingers, mascarpone', price: '$9', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Chocolate Mousse', description: '70% cacao, sea salt, cream', price: '$8', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476a?q=80&w=1200&auto=format&fit=crop' }
  ],
  drinks: [
    { name: 'Flat White', description: 'Velvety microfoam, double shot', price: '$4', image: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66f?q=80&w=1200&auto=format&fit=crop', special: true },
    { name: 'Pour Over', description: 'Single-origin brew, notes of citrus & cocoa', price: '$5', image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Iced Matcha', description: 'Stone-ground matcha, oat milk', price: '$5', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1200&auto=format&fit=crop' }
  ],
}
