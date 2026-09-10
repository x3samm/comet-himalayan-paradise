import { Compass, Sparkles } from "lucide-react";

type Category = { title: string; activities: string[] };

const categories: Category[] = [
  { title: "Ice Breakers", activities: ["Pass the Ball (Say Name + Hobby)", "Name Chain Game", "Silent Line-Up", "Emoji Introduction", "Rapid Fire Introduction"] },
  { title: "Communication", activities: ["Pahadi Word Exchange", "Dumb Charades", "Memory Relay", "Listen and Draw", "Introduce Your Friend"] },
  { title: "Smart Memory", activities: ["Guess What Changed", "Word Chain Game", "Missing Object Game", "Spot the Difference", "Name and Hobby Recall", "Face and Name Memory", "Cross the Danger Zone", "Arrange and Recall", "Memory Card Matching"] },
  { title: "Problem Solving", activities: ["Spot the Pattern", "Odd One Out", "Decision Making Scenarios", "Find Shortest Path", "Treasure Hunt with Clues", "Riddle Solving Game"] },
  { title: "Creativity", activities: ["Photography Challenge", "Nature Art", "Picture Story Creation", "Creative Paper Art", "Clay Modeling", "Origami Art"] },
  { title: "Mindfulness", activities: ["Barefoot Walking in the Clouds", "Yoga Freeze", "Path of Focus", "Nature's Trail to Calm", "Moment of Stillness", "Balance Masters"] },
  { title: "STEM Discovery Zone", activities: ["Paper Airplane Design Contest", "STEM Quiz Competition", "Balloon Rocket Challenge", "Public Speaking", "Bridge Building Using Straws", "Climate Change Awareness"] },
  { title: "Team Building", activities: ["Balloon Passing", "Human Knot Team Race", "Ring Toss Relay", "Puzzle Solving in Teams", "Group Art Challenge", "Ball Toss Relay", "Wheelbarrow Race", "Goal Scorer Challenge"] },
  { title: "Cultural & Social", activities: ["Campfire Stories", "Antakshiri", "Pass the Parcel", "Pahadi Riwaaz", "Pahadi Food Festival"] },
  { title: "Race - The Speed Circuit", activities: ["Spoon-Potato Race", "Team Sack Race", "Three Legged Race", "Obstacle Race Relay", "Jalebi Race", "Train Walk Race"] },
  { title: "Blindfold Courses", activities: ["Blindfold Catch Game", "Blindfold Trust Walk", "Trust Crawl", "Blindfold Drawing", "Find Your Team", "Minefield Crossing", "Blind Search Adventure"] },
  { title: "Balloon Olympic", activities: ["Balloon Stomp Race", "Balloon Volley Game", "Balloon Balance Race", "Balloon Relay Race", "Balloon Kick and Pack Race", "Full Body Balloon Race", "Balloon Pin and Pop", "Balloon Football", "Balloon Crush Game"] },
  { title: "Water Games", activities: ["Sponge Relay", "Two-Person Water Relay", "Water Basket", "Balloon Crush Race Style", "Water Bucket Relay Race", "Back Pass Water Relay", "Hanging Balloon Pop", "Sip and Spill"] },
  { title: "Rope Riders", activities: ["Rope Limbo Game", "Monkey Traverse Game", "Rope Ladder Climb", "Tug of War", "Rope Maze", "Circle Rope Pull Game", "Skipping Challenge", "Net Crawl Race", "Rope Crossing Challenge"] },
  { title: "Tyre Games", activities: ["Tyre Power Run", "Tyre Clash Challenge", "Tyre Grid Race", "Tyre Crawl Race", "Tyre Rolling Race", "Tyre Stack Challenge"] },
  { title: "Creepy Crawly Race", activities: ["Chain Circle Walk", "Crab Walk Race", "Linked Leg Race", "Balloon Chain Race", "Backward Crawl Race", "Caterpillar Race", "Frog Jump Crawl"] },
  { title: "Toss and Shot", activities: ["Aim & Blast", "Toss the Ring", "Basket Battle", "Mini Hockey Shot", "Hit the Accuracy Challenge", "Hit the Wicket Challenge", "Archery Challenge", "Dummy Golf Challenge"] },
  { title: "Himalayan Adventure Sports", activities: ["Hiking", "Night Safari", "Treasure Hunt", "Mountain Cycling", "Mountain Run", "Fishing"] },
  { title: "Musical Arena", activities: ["Guess the Video Clip", "Guess the Song", "Musical Handkerchief Game", "Antakshiri"] },
  { title: "Flour Coin Fun Game", activities: ["Lucky Coin Dig", "Flour Coin Fun Game", "Flour Mountain Relay", "Coin Balance Challenge", "Coin Blow Race", "Guess the Coin", "Blindfold Coin Search"] },
  { title: "Desi Khel", activities: ["Kite Flying", "Kancha Ka Khel", "Kancha Palt", "Kancha Ka Khel - 2", "Stack - Target & Rebuild", "Murga Jhapat"] },
  { title: "Evening Campfire", activities: ["Emoji Introduction", "Two Truths and One Lie", "Riddle Challenge", "Campfire Karaoke", "Who Am I?"] },
  { title: "Closing Ceremony", activities: ["Camp Awards Ceremony", "Lucky Draw", "Talent Showcase Finale", "Best Photography", "Memory Circle", "Best Nature Art", "Secret Appreciation Cards", "Camp Memories", "Max Himalayan Birds", "Max Himalayan Flower Award"] },
];

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function CampActivitiesPage() {
  return <main className="bg-stone-50">
    <section className="bg-green-950 py-20 sm:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">CHP Holiday Camp</p>
        <h1 className="text-4xl sm:text-5xl font-bold">Camp Activities</h1>
        <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-relaxed">Explore every activity category from the CHP Holiday Camp programme.</p>
      </div>
    </section>

    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center"><p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Find your experience</p><h2 className="text-slate-800 text-3xl sm:text-4xl font-bold">Activity Categories</h2></div>
        <nav aria-label="Activity categories" className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => <a key={category.title} href={`#${slug(category.title)}`} className="group rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-900 font-semibold">{String(index + 1).padStart(2, "0")}</span><span className="font-semibold text-slate-800 group-hover:text-green-900">{category.title}</span></div>
          </a>)}
        </nav>
      </div>
    </section>

    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {categories.map((category) => <section key={category.title} id={slug(category.title)} className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-7"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Sparkles className="w-5 h-5" /></span><div><p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">Activity category</p><h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{category.title}</h2></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {category.activities.map((activity) => {
              return <article key={activity} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200 transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between gap-4"><h3 className="text-lg font-semibold text-slate-800">{activity}</h3><Compass className="w-5 h-5 shrink-0 text-green-800" /></div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">A CHP Holiday Camp activity in the {category.title} category.</p>
              </article>;
            })}
          </div>
        </section>)}
      </div>
    </section>
  </main>;
}
