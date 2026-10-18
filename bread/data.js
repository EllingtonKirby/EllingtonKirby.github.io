// Catalogue of "dough wrapped around filling" foods, described by the outer layer only.
//
// All quantities are baker's percentages (per 100 g of flour / starch base), taken
// from typical home or traditional recipes. They are approximations: every family
// and bakery does it differently, so read each point as "roughly here".
//
//   hydration – total liquid / flour. Water, broth, milk, and the water in eggs
//               (~75%) and butter (~16%) all count.
//   fat       – added fat / flour: butter, lard, suet, ghee, oil, shortening,
//               including butter laminated into the dough. Fat brushed between
//               sheets of filo/yufka afterwards is not counted.
//   yeast     – instant-yeast equivalent / flour (fresh yeast ÷ 3, active dry ÷ 1.25).
//               0 for unleavened and chemically leavened doughs.
//
//   leaven    – none | yeast | chemical | steam (lamination / boiled-dough puff)
//   cook      – baked | fried | steamed | boiled | griddled
//   base      – wheat unless noted.

window.BREAD_DATA = [
  // ---------- East Asia ----------
  { name: "Jiaozi", origin: "China", region: "East Asia", cook: "boiled", leaven: "none", hydration: 50, fat: 0, yeast: 0, base: "wheat", filling: "Pork, napa cabbage, chives", note: "Cold-water dough, rolled thin with a thicker centre." },
  { name: "Guotie (potstickers)", origin: "China", region: "East Asia", cook: "griddled", leaven: "none", hydration: 55, fat: 0, yeast: 0, base: "wheat", filling: "Pork and cabbage", note: "Hot-water dough: scalding part of the flour makes it softer and less elastic." },
  { name: "Xiaolongbao", origin: "China (Shanghai)", region: "East Asia", cook: "steamed", leaven: "none", hydration: 48, fat: 0, yeast: 0, base: "wheat", filling: "Pork and aspic (soup)", note: "Thin, mostly unleavened skin pleated 18+ times." },
  { name: "Shengjian bao", origin: "China (Shanghai)", region: "East Asia", cook: "griddled", leaven: "yeast", hydration: 52, fat: 2, yeast: 1.0, base: "wheat", filling: "Pork and aspic", note: "Half-risen dough, pan-fried then steamed." },
  { name: "Roubao", origin: "China", region: "East Asia", cook: "steamed", leaven: "yeast", hydration: 50, fat: 2, yeast: 1.0, base: "wheat", filling: "Pork", note: "Classic steamed bun dough." },
  { name: "Char siu bao", origin: "China (Guangdong)", region: "East Asia", cook: "steamed", leaven: "yeast", hydration: 45, fat: 5, yeast: 1.0, base: "wheat", filling: "Barbecued pork", note: "Low-protein flour, sugar, plus baking powder so the top bursts open." },
  { name: "Wonton", origin: "China", region: "East Asia", cook: "boiled", leaven: "none", hydration: 38, fat: 1, yeast: 0, base: "wheat", filling: "Shrimp and pork", note: "Stiff egg-and-alkali dough, rolled paper thin." },
  { name: "Siu mai", origin: "China (Guangdong)", region: "East Asia", cook: "steamed", leaven: "none", hydration: 40, fat: 1, yeast: 0, base: "wheat", filling: "Pork and shrimp", note: "Same family as wonton wrappers; left open at the top." },
  { name: "Har gow", origin: "China (Guangdong)", region: "East Asia", cook: "steamed", leaven: "none", hydration: 110, fat: 5, yeast: 0, base: "wheat starch + tapioca", filling: "Shrimp", note: "Gluten-free starch dough scalded with boiling water, turns translucent." },
  { name: "Xianbing", origin: "China (northern)", region: "East Asia", cook: "griddled", leaven: "none", hydration: 65, fat: 2, yeast: 0, base: "wheat", filling: "Beef or pork with scallion", note: "Very soft hot/cold-water dough pressed flat in the pan." },
  { name: "Hujiao bing", origin: "China (Fuzhou / Taiwan)", region: "East Asia", cook: "baked", leaven: "yeast", hydration: 55, fat: 8, yeast: 1.0, base: "wheat", filling: "Peppery pork and scallion", note: "Baked on the wall of a clay oven." },
  { name: "Cantonese mooncake", origin: "China (Guangdong)", region: "East Asia", cook: "baked", leaven: "none", hydration: 17, fat: 25, yeast: 0, base: "wheat", filling: "Lotus seed paste, salted yolk", note: "Skin is flour, golden syrup, oil and lye water; the syrup supplies almost all the liquid." },
  { name: "Suzhou mooncake", origin: "China (Suzhou)", region: "East Asia", cook: "baked", leaven: "steam", hydration: 25, fat: 35, yeast: 0, base: "wheat", filling: "Pork or sweet paste", note: "Water-dough wrapped around oil-dough and rolled: Chinese flaky pastry." },
  { name: "Wife cake", origin: "Hong Kong", region: "East Asia", cook: "baked", leaven: "steam", hydration: 25, fat: 33, yeast: 0, base: "wheat", filling: "Winter melon paste", note: "Water-oil laminated pastry." },
  { name: "Pineapple cake", origin: "Taiwan", region: "East Asia", cook: "baked", leaven: "none", hydration: 15, fat: 60, yeast: 0, base: "wheat", filling: "Pineapple jam", note: "Short, buttery, milk-powder crust." },
  { name: "Gyoza", origin: "Japan", region: "East Asia", cook: "griddled", leaven: "none", hydration: 50, fat: 0, yeast: 0, base: "wheat", filling: "Pork, cabbage, garlic", note: "Thinner and more uniform than jiaozi." },
  { name: "Nikuman", origin: "Japan", region: "East Asia", cook: "steamed", leaven: "yeast", hydration: 50, fat: 5, yeast: 1.2, base: "wheat", filling: "Pork", note: "Sweeter, softer cousin of baozi, often with baking powder too." },
  { name: "Anpan", origin: "Japan", region: "East Asia", cook: "baked", leaven: "yeast", hydration: 63, fat: 10, yeast: 2.0, base: "wheat", filling: "Sweet red bean paste", note: "Enriched milk bread; the original was sakadane (sake-yeast) leavened." },
  { name: "Kare pan", origin: "Japan", region: "East Asia", cook: "fried", leaven: "yeast", hydration: 62, fat: 10, yeast: 2.0, base: "wheat", filling: "Japanese curry", note: "Enriched dough, panko-coated and deep fried." },
  { name: "Mandu", origin: "Korea", region: "East Asia", cook: "boiled", leaven: "none", hydration: 50, fat: 2, yeast: 0, base: "wheat", filling: "Pork, tofu, kimchi, glass noodles", note: "Also steamed or pan-fried." },
  { name: "Hoppang", origin: "Korea", region: "East Asia", cook: "steamed", leaven: "yeast", hydration: 55, fat: 4, yeast: 1.5, base: "wheat", filling: "Red bean or vegetables", note: "Winter street-snack steamed bun." },
  { name: "Buuz", origin: "Mongolia", region: "East Asia", cook: "steamed", leaven: "none", hydration: 45, fat: 0, yeast: 0, base: "wheat", filling: "Mutton and onion", note: "Plain flour and water, open-topped." },
  { name: "Khuushuur", origin: "Mongolia", region: "East Asia", cook: "fried", leaven: "none", hydration: 45, fat: 0, yeast: 0, base: "wheat", filling: "Mutton", note: "Flat half-moon, deep fried in mutton fat." },

  // ---------- South & Southeast Asia ----------
  { name: "Momo", origin: "Nepal / Tibet", region: "South & Southeast Asia", cook: "steamed", leaven: "none", hydration: 45, fat: 1, yeast: 0, base: "wheat", filling: "Buffalo, chicken or vegetables", note: "Sometimes a pinch of baking powder." },
  { name: "Samosa", origin: "India", region: "South & Southeast Asia", cook: "fried", leaven: "none", hydration: 35, fat: 18, yeast: 0, base: "wheat", filling: "Spiced potato and peas", note: "Very stiff dough with ghee rubbed in (moyan) for a blistered, short crust." },
  { name: "Kachori", origin: "India", region: "South & Southeast Asia", cook: "fried", leaven: "none", hydration: 40, fat: 22, yeast: 0, base: "wheat", filling: "Spiced moong dal", note: "Fried slowly so it puffs and goes flaky." },
  { name: "Gujiya", origin: "India", region: "South & Southeast Asia", cook: "fried", leaven: "none", hydration: 35, fat: 20, yeast: 0, base: "wheat", filling: "Khoya, coconut, nuts", note: "Sweet cousin of the samosa crust, crimped edge." },
  { name: "Aloo paratha", origin: "India / Pakistan", region: "South & Southeast Asia", cook: "griddled", leaven: "none", hydration: 60, fat: 4, yeast: 0, base: "whole wheat (atta)", filling: "Spiced potato", note: "Soft atta dough rolled around the filling, griddled with ghee." },
  { name: "Kathi roll", origin: "India (Kolkata)", region: "South & Southeast Asia", cook: "griddled", leaven: "none", hydration: 55, fat: 8, yeast: 0, base: "wheat", filling: "Kebab, egg, onion", note: "Paratha wrapped around skewered meat." },
  { name: "Keema naan", origin: "India / Pakistan", region: "South & Southeast Asia", cook: "baked", leaven: "yeast", hydration: 62, fat: 6, yeast: 1.0, base: "wheat", filling: "Spiced minced lamb", note: "Yogurt-enriched naan, tandoor baked." },
  { name: "Amritsari kulcha", origin: "India (Punjab)", region: "South & Southeast Asia", cook: "baked", leaven: "chemical", hydration: 55, fat: 8, yeast: 0, base: "wheat", filling: "Spiced potato", note: "Maida dough with yogurt, baking soda and powder." },
  { name: "Modak", origin: "India (Maharashtra)", region: "South & Southeast Asia", cook: "steamed", leaven: "none", hydration: 100, fat: 3, yeast: 0, base: "rice flour", filling: "Coconut and jaggery", note: "Rice flour cooked in boiling water, shaped into a pleated pouch." },
  { name: "Curry puff", origin: "Malaysia / Singapore", region: "South & Southeast Asia", cook: "fried", leaven: "steam", hydration: 30, fat: 35, yeast: 0, base: "wheat", filling: "Curried potato and chicken", note: "Spiral water-oil laminated pastry (karipap pusing)." },
  { name: "Bánh bao", origin: "Vietnam", region: "South & Southeast Asia", cook: "steamed", leaven: "yeast", hydration: 50, fat: 4, yeast: 1.2, base: "wheat", filling: "Pork, quail egg, sausage", note: "Southern-Chinese style steamed bun." },
  { name: "Bánh bột lọc", origin: "Vietnam (Huế)", region: "South & Southeast Asia", cook: "boiled", leaven: "none", hydration: 80, fat: 0, yeast: 0, base: "tapioca", filling: "Shrimp and pork belly", note: "Chewy, clear tapioca dough." },
  { name: "Bánh mì", origin: "Vietnam", region: "South & Southeast Asia", cook: "baked", leaven: "yeast", hydration: 68, fat: 2, yeast: 1.0, base: "wheat", filling: "Pâté, pork, pickles, herbs", note: "Light, thin-crusted baguette, sometimes with rice flour." },
  { name: "Siopao", origin: "Philippines", region: "South & Southeast Asia", cook: "steamed", leaven: "yeast", hydration: 55, fat: 5, yeast: 1.2, base: "wheat", filling: "Asado pork or bola-bola", note: "Sweet, soft steamed bun." },
  { name: "Filipino empanada", origin: "Philippines", region: "South & Southeast Asia", cook: "fried", leaven: "none", hydration: 40, fat: 30, yeast: 0, base: "wheat", filling: "Chicken, potato, raisins", note: "Sweetened short dough; Ilocos version uses rice flour." },

  // ---------- Middle East, Central Asia & Caucasus ----------
  { name: "Fatayer", origin: "Levant", region: "Middle East & Central Asia", cook: "baked", leaven: "yeast", hydration: 60, fat: 10, yeast: 1.5, base: "wheat", filling: "Spinach and sumac", note: "Olive-oil yeast dough folded into triangles." },
  { name: "Sambusak", origin: "Levant / Iraq", region: "Middle East & Central Asia", cook: "fried", leaven: "none", hydration: 40, fat: 25, yeast: 0, base: "wheat", filling: "Cheese or chickpeas", note: "Short oil-or-butter dough; baked versions exist too." },
  { name: "Su böreği", origin: "Turkey", region: "Middle East & Central Asia", cook: "baked", leaven: "none", hydration: 45, fat: 3, yeast: 0, base: "wheat", filling: "Feta and parsley", note: "Egg-rich yufka sheets are boiled, then layered with butter." },
  { name: "Gözleme", origin: "Turkey", region: "Middle East & Central Asia", cook: "griddled", leaven: "none", hydration: 58, fat: 3, yeast: 0, base: "wheat", filling: "Spinach, cheese, minced meat", note: "Hand-rolled yufka folded around the filling on a saj." },
  { name: "Pide", origin: "Turkey", region: "Middle East & Central Asia", cook: "baked", leaven: "yeast", hydration: 62, fat: 5, yeast: 1.0, base: "wheat", filling: "Kıyma, cheese, egg", note: "Boat-shaped, edges folded up over the filling." },
  { name: "Mantı", origin: "Turkey (Kayseri)", region: "Middle East & Central Asia", cook: "boiled", leaven: "none", hydration: 45, fat: 3, yeast: 0, base: "wheat", filling: "Spiced lamb", note: "Egg dough, tiny dumplings served with yogurt." },
  { name: "Samsa", origin: "Uzbekistan", region: "Middle East & Central Asia", cook: "baked", leaven: "steam", hydration: 50, fat: 25, yeast: 0, base: "wheat", filling: "Lamb, onion, tail fat", note: "Rolled-and-greased laminated dough, slapped onto a tandyr wall." },
  { name: "Chebureki", origin: "Crimean Tatar", region: "Middle East & Central Asia", cook: "fried", leaven: "none", hydration: 45, fat: 5, yeast: 0, base: "wheat", filling: "Lamb and onion", note: "Thin dough, often with vodka for bubbles." },
  { name: "Khinkali", origin: "Georgia", region: "Middle East & Central Asia", cook: "boiled", leaven: "none", hydration: 45, fat: 0, yeast: 0, base: "wheat", filling: "Spiced beef/pork and broth", note: "Stiff flour-water dough twisted into a topknot." },
  { name: "Adjarian khachapuri", origin: "Georgia", region: "Middle East & Central Asia", cook: "baked", leaven: "yeast", hydration: 60, fat: 5, yeast: 1.2, base: "wheat", filling: "Sulguni cheese, egg, butter", note: "Open boat of yeasted dough." },
  { name: "Falafel pita", origin: "Levant / Egypt", region: "Middle East & Central Asia", cook: "baked", leaven: "yeast", hydration: 62, fat: 3, yeast: 1.2, base: "wheat", filling: "Falafel, tahini, salad", note: "Pocket bread puffed by steam in a very hot oven." },
  { name: "Shawarma (saj)", origin: "Levant", region: "Middle East & Central Asia", cook: "griddled", leaven: "none", hydration: 55, fat: 2, yeast: 0, base: "wheat", filling: "Spit-roasted meat, toum, pickles", note: "Thin saj / markook bread rolled around the meat." },

  // ---------- Europe ----------
  { name: "Cornish pasty", origin: "England", region: "Europe", cook: "baked", leaven: "none", hydration: 35, fat: 50, yeast: 0, base: "wheat", filling: "Beef skirt, potato, swede, onion", note: "Strong-flour shortcrust with lard, sturdy enough to hold by the crimp." },
  { name: "Pork pie", origin: "England (Melton Mowbray)", region: "Europe", cook: "baked", leaven: "none", hydration: 38, fat: 32, yeast: 0, base: "wheat", filling: "Pork and jelly", note: "Hot-water crust: lard melted in boiling water, raised by hand." },
  { name: "Steak & kidney pudding", origin: "England", region: "Europe", cook: "steamed", leaven: "chemical", hydration: 60, fat: 50, yeast: 0, base: "wheat", filling: "Beef and kidney in gravy", note: "Suet crust with self-raising flour, steamed in a basin." },
  { name: "Sausage roll", origin: "United Kingdom", region: "Europe", cook: "baked", leaven: "steam", hydration: 50, fat: 85, yeast: 0, base: "wheat", filling: "Sausage meat", note: "Puff pastry: butter folded into a lean dough, lifted by steam." },
  { name: "Quiche Lorraine", origin: "France", region: "Europe", cook: "baked", leaven: "none", hydration: 25, fat: 55, yeast: 0, base: "wheat", filling: "Egg custard, lardons", note: "Pâte brisée, often with an egg yolk." },
  { name: "Pain au chocolat", origin: "France", region: "Europe", cook: "baked", leaven: "yeast", hydration: 55, fat: 58, yeast: 1.5, base: "wheat", filling: "Chocolate batons", note: "Laminated yeasted dough (viennoiserie): yeast and steam both lift it." },
  { name: "Croque monsieur", origin: "France", region: "Europe", cook: "griddled", leaven: "yeast", hydration: 60, fat: 8, yeast: 1.5, base: "wheat", filling: "Ham, gruyère, béchamel", note: "Pain de mie: soft, tight-crumbed sandwich loaf." },
  { name: "Jambon-beurre", origin: "France", region: "Europe", cook: "baked", leaven: "yeast", hydration: 68, fat: 0, yeast: 0.5, base: "wheat", filling: "Ham and butter", note: "Lean baguette: flour, water, salt, yeast." },
  { name: "Panino", origin: "Italy", region: "Europe", cook: "baked", leaven: "yeast", hydration: 78, fat: 2, yeast: 0.4, base: "wheat", filling: "Cured meats, cheese", note: "Ciabatta-style high-hydration roll with a biga." },
  { name: "Calzone", origin: "Italy (Naples)", region: "Europe", cook: "baked", leaven: "yeast", hydration: 62, fat: 2, yeast: 0.5, base: "wheat", filling: "Ricotta, mozzarella, salami", note: "Folded pizza dough." },
  { name: "Panzerotto", origin: "Italy (Puglia)", region: "Europe", cook: "fried", leaven: "yeast", hydration: 60, fat: 5, yeast: 1.0, base: "wheat", filling: "Tomato and mozzarella", note: "Small, deep-fried calzone." },
  { name: "Ravioli", origin: "Italy", region: "Europe", cook: "boiled", leaven: "none", hydration: 42, fat: 5, yeast: 0, base: "wheat (00 / semolina)", filling: "Ricotta and spinach, meat", note: "Fresh egg pasta; the eggs are the only liquid." },
  { name: "Tortellini", origin: "Italy (Emilia)", region: "Europe", cook: "boiled", leaven: "none", hydration: 42, fat: 5, yeast: 0, base: "wheat", filling: "Pork loin, prosciutto, mortadella", note: "Egg pasta, served in brodo." },
  { name: "Pierogi", origin: "Poland", region: "Europe", cook: "boiled", leaven: "none", hydration: 50, fat: 5, yeast: 0, base: "wheat", filling: "Potato and farmer's cheese", note: "Soft dough enriched with egg, sour cream or butter." },
  { name: "Pelmeni", origin: "Russia (Siberia)", region: "Europe", cook: "boiled", leaven: "none", hydration: 50, fat: 0, yeast: 0, base: "wheat", filling: "Beef and pork", note: "Lean flour-water-egg dough." },
  { name: "Vareniki", origin: "Ukraine", region: "Europe", cook: "boiled", leaven: "none", hydration: 52, fat: 3, yeast: 0, base: "wheat", filling: "Potato, cherries, or tvorog", note: "Often made with kefir or hot water." },
  { name: "Piroshki", origin: "Russia", region: "Europe", cook: "fried", leaven: "yeast", hydration: 60, fat: 10, yeast: 2.0, base: "wheat", filling: "Beef, cabbage, egg & rice", note: "Soft enriched yeast dough; baked versions are common too." },
  { name: "Kulebyaka", origin: "Russia", region: "Europe", cook: "baked", leaven: "yeast", hydration: 55, fat: 15, yeast: 2.0, base: "wheat", filling: "Salmon, rice, egg, mushrooms", note: "Enriched yeast dough (later versions use puff)." },
  { name: "Karelian pie", origin: "Finland / Karelia", region: "Europe", cook: "baked", leaven: "none", hydration: 60, fat: 0, yeast: 0, base: "rye", filling: "Rice porridge", note: "Thin unleavened rye crust, open and crimped, brushed with butter after." },
  { name: "Empanada gallega", origin: "Spain (Galicia)", region: "Europe", cook: "baked", leaven: "yeast", hydration: 50, fat: 15, yeast: 1.0, base: "wheat", filling: "Tuna, peppers, onion", note: "Large pie of olive-oil yeast dough." },
  { name: "Strudel", origin: "Austria", region: "Europe", cook: "baked", leaven: "none", hydration: 50, fat: 8, yeast: 0, base: "wheat", filling: "Apple, raisins, cinnamon", note: "Stretched until you can read through it." },
  { name: "Spanakopita", origin: "Greece", region: "Europe", cook: "baked", leaven: "none", hydration: 55, fat: 3, yeast: 0, base: "wheat", filling: "Spinach and feta", note: "Filo: lean dough with a little oil and vinegar, layered with oil." },

  // ---------- Africa ----------
  { name: "Sambusa", origin: "Ethiopia / Somalia", region: "Africa", cook: "fried", leaven: "none", hydration: 45, fat: 8, yeast: 0, base: "wheat", filling: "Lentils or spiced beef", note: "Thin, crisp wrapper folded in triangles." },
  { name: "Nigerian meat pie", origin: "Nigeria", region: "Africa", cook: "baked", leaven: "chemical", hydration: 30, fat: 50, yeast: 0, base: "wheat", filling: "Minced beef, potato, carrot", note: "Margarine shortcrust with baking powder." },
  { name: "Pastilla", origin: "Morocco", region: "Africa", cook: "baked", leaven: "none", hydration: 80, fat: 2, yeast: 0, base: "wheat", filling: "Pigeon/chicken, almonds, cinnamon", note: "Warqa: a soft batter-dough dabbed onto a hot pan into gossamer sheets." },
  { name: "Brik", origin: "Tunisia", region: "Africa", cook: "fried", leaven: "none", hydration: 80, fat: 2, yeast: 0, base: "wheat (semolina)", filling: "Egg, tuna, capers", note: "Malsouka sheet, the Tunisian warqa." },
  { name: "Mkate wa mayai", origin: "Kenya / Tanzania", region: "Africa", cook: "griddled", leaven: "none", hydration: 55, fat: 5, yeast: 0, base: "wheat", filling: "Egg and minced meat", note: "Dough stretched thin, folded into a parcel on the griddle." },
  { name: "Bunny chow", origin: "South Africa (Durban)", region: "Africa", cook: "baked", leaven: "yeast", hydration: 62, fat: 3, yeast: 1.5, base: "wheat", filling: "Curry", note: "A hollowed-out white tin loaf." },

  // ---------- Latin America & Caribbean ----------
  { name: "Empanada (Argentina)", origin: "Argentina", region: "Latin America & Caribbean", cook: "baked", leaven: "none", hydration: 45, fat: 25, yeast: 0, base: "wheat", filling: "Beef, onion, egg, olives", note: "Lard dough made with warm salted water." },
  { name: "Salteña", origin: "Bolivia", region: "Latin America & Caribbean", cook: "baked", leaven: "none", hydration: 35, fat: 35, yeast: 0, base: "wheat", filling: "Juicy beef or chicken stew", note: "Sweet, achiote-tinted lard crust." },
  { name: "Pastel", origin: "Brazil", region: "Latin America & Caribbean", cook: "fried", leaven: "none", hydration: 50, fat: 8, yeast: 0, base: "wheat", filling: "Ground beef, cheese, palmito", note: "Thin dough with cachaça that blisters in the fryer." },
  { name: "Coxinha", origin: "Brazil", region: "Latin America & Caribbean", cook: "fried", leaven: "none", hydration: 100, fat: 5, yeast: 0, base: "wheat", filling: "Shredded chicken, catupiry", note: "Dough is flour cooked in chicken stock, then breaded." },
  { name: "Tamal", origin: "Mexico", region: "Latin America & Caribbean", cook: "steamed", leaven: "chemical", hydration: 120, fat: 50, yeast: 0, base: "corn (masa)", filling: "Pork in chile, rajas", note: "Masa beaten with lard and broth until it floats; baking powder." },
  { name: "Pupusa", origin: "El Salvador", region: "Latin America & Caribbean", cook: "griddled", leaven: "none", hydration: 125, fat: 0, yeast: 0, base: "corn (masa)", filling: "Chicharrón, beans, quesillo", note: "Masa patted around the filling." },
  { name: "Arepa rellena", origin: "Venezuela / Colombia", region: "Latin America & Caribbean", cook: "griddled", leaven: "none", hydration: 130, fat: 2, yeast: 0, base: "corn (precooked)", filling: "Reina pepiada, beans, cheese", note: "Precooked cornmeal, split and stuffed after cooking." },
  { name: "Taco", origin: "Mexico", region: "Latin America & Caribbean", cook: "griddled", leaven: "none", hydration: 125, fat: 0, yeast: 0, base: "corn (nixtamal)", filling: "Anything", note: "Corn tortilla folded around the filling." },
  { name: "Burrito", origin: "Mexico (north) / US", region: "Latin America & Caribbean", cook: "griddled", leaven: "chemical", hydration: 50, fat: 15, yeast: 0, base: "wheat", filling: "Beans, rice, meat", note: "Flour tortilla with lard and baking powder." },
  { name: "Torta", origin: "Mexico", region: "Latin America & Caribbean", cook: "baked", leaven: "yeast", hydration: 65, fat: 3, yeast: 1.0, base: "wheat", filling: "Milanesa, avocado, beans", note: "Bolillo or telera roll." },
  { name: "Cubano", origin: "Cuba / Florida", region: "Latin America & Caribbean", cook: "griddled", leaven: "yeast", hydration: 63, fat: 5, yeast: 1.0, base: "wheat", filling: "Roast pork, ham, Swiss, pickles", note: "Cuban bread made with lard, pressed." },
  { name: "Jamaican patty", origin: "Jamaica", region: "Latin America & Caribbean", cook: "baked", leaven: "none", hydration: 40, fat: 50, yeast: 0, base: "wheat", filling: "Spiced beef", note: "Flaky shortening/suet crust coloured with turmeric." },

  // ---------- North America & Oceania ----------
  { name: "Apple pie", origin: "United States", region: "North America & Oceania", cook: "baked", leaven: "none", hydration: 30, fat: 65, yeast: 0, base: "wheat", filling: "Apples, cinnamon", note: "All-butter or butter-shortening flaky crust." },
  { name: "Chicken pot pie", origin: "United States", region: "North America & Oceania", cook: "baked", leaven: "none", hydration: 32, fat: 60, yeast: 0, base: "wheat", filling: "Chicken and vegetables in gravy", note: "Flaky pie crust lid (often top only)." },
  { name: "Fried hand pie", origin: "United States (South)", region: "North America & Oceania", cook: "fried", leaven: "chemical", hydration: 40, fat: 35, yeast: 0, base: "wheat", filling: "Dried apples or peaches", note: "Shortening dough with baking powder." },
  { name: "Hamburger", origin: "United States", region: "North America & Oceania", cook: "baked", leaven: "yeast", hydration: 60, fat: 10, yeast: 1.5, base: "wheat", filling: "Beef patty", note: "Soft enriched bun with egg and sugar." },
  { name: "Kolache (klobasnek)", origin: "Texas (Czech)", region: "North America & Oceania", cook: "baked", leaven: "yeast", hydration: 55, fat: 15, yeast: 2.0, base: "wheat", filling: "Sausage, cheese, jalapeño", note: "Sweet, rich yeasted dough." },
  { name: "Bierock / Runza", origin: "Kansas / Nebraska (Volga German)", region: "North America & Oceania", cook: "baked", leaven: "yeast", hydration: 60, fat: 10, yeast: 1.5, base: "wheat", filling: "Beef, cabbage, onion", note: "Soft enriched yeast dough." },
  { name: "Knish", origin: "New York (Ashkenazi)", region: "North America & Oceania", cook: "baked", leaven: "none", hydration: 40, fat: 25, yeast: 0, base: "wheat", filling: "Mashed potato and onion", note: "Thin oil dough stretched around a lot of filling." },
  { name: "Tourtière", origin: "Canada (Québec)", region: "North America & Oceania", cook: "baked", leaven: "none", hydration: 28, fat: 60, yeast: 0, base: "wheat", filling: "Spiced pork", note: "Lard pie crust." },
  { name: "Australian meat pie", origin: "Australia / New Zealand", region: "North America & Oceania", cook: "baked", leaven: "none", hydration: 35, fat: 55, yeast: 0, base: "wheat", filling: "Minced beef in gravy", note: "Shortcrust base with a puff pastry lid." }
];
