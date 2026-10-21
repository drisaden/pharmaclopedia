import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  FlaskConical,
  LogIn,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Video,
  X,
} from 'lucide-react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { calculateQuizResult, getQuizForMedicine } from './lib/quizzes'
import { medicineIndex, medicines, searchMedicines } from './lib/medicines'
import { buildLessonContent, findMedicineById, getSuggestedQuestions, lessonModes } from './lib/tutor'
import { getVideosForMedicine } from './data/videos'
import type { LessonMode } from './types/app'

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/search?q=amoxicillin', label: 'Explore Medicines' },
  { to: '/compare', label: 'Compare' },
  { to: '/account', label: 'Account' },
  { to: '/about', label: 'About' },
]

const formatList = (list: string[] | undefined, fallback = 'Information not available in this profile.') =>
  list && list.length ? list.join(', ') : fallback

type RoleKey = 'student' | 'pharmacist' | 'patient'

type RoleDashboard = {
  title: string
  badge: string
  summary: string
  features: string[]
  quickActions: { label: string; to: string }[]
}

const roleDashboards: Record<RoleKey, RoleDashboard> = {
  student: {
    title: 'Student',
    badge: 'Revision mode',
    summary: 'Build recall through simplified learning, quizzes, medicine comparisons, and structured study paths.',
    features: ['Exam-style revision tracks', 'Mechanism-first teaching summaries', 'Confidence scoring and quick recall prompts'],
    quickActions: [
      { label: 'Browse medicines', to: '/search?q=amoxicillin' },
      { label: 'Revision quiz', to: '/medicine/amoxicillin/quiz' },
      { label: 'Compare drugs', to: '/compare?left=amoxicillin&right=metformin' },
    ],
  },
  pharmacist: {
    title: 'Pharmacist',
    badge: 'Clinical reference mode',
    summary: 'Use guided product summaries, safety checks, and therapeutic comparisons for counselling and review support.',
    features: ['Therapeutic comparison panels', 'Counselling and safety reminders', 'Drug class and profile navigation'],
    quickActions: [
      { label: 'Open compare view', to: '/compare?left=amoxicillin&right=metformin' },
      { label: 'Review safety notes', to: '/medicine/amoxicillin#safety' },
      { label: 'Teaching guide', to: '/medicine/amoxicillin/teach' },
    ],
  },
  patient: {
    title: 'Patient / caregiver',
    badge: 'Plain-language mode',
    summary: 'Understand what a medicine does, when it is used, and what safety details matter most in plain language.',
    features: ['Clear dosing and administration notes', 'Safety and warning highlights', 'Comfort-first learning explanations'],
    quickActions: [
      { label: 'Explore paracetamol', to: '/medicine/paracetamol' },
      { label: 'Read safety notes', to: '/medicine/paracetamol#safety' },
      { label: 'Learn about uses', to: '/medicine/paracetamol#uses' },
    ],
  },
}

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [selectedRole, setSelectedRole] = useState<RoleKey>('student')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleRoleSelect = (role: RoleKey) => {
    setSelectedRole(role)
    setIsAuthenticated(true)
    setShowAuthModal(false)
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header onOpenAuth={() => setShowAuthModal(true)} />
        <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage onOpenAuth={() => setShowAuthModal(true)} />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/medicine/:id" element={<MedicineProfilePage />} />
            <Route path="/medicine/:id/teach" element={<TeachPage />} />
            <Route path="/medicine/:id/quiz" element={<QuizPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/account" element={<AccountPage selectedRole={selectedRole} onSelectRole={setSelectedRole} isAuthenticated={isAuthenticated} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onRoleSelect={handleRoleSelect}
          onGuestContinue={() => {
            setIsAuthenticated(false)
            setSelectedRole('student')
            setShowAuthModal(false)
          }}
        />
      </div>
    </BrowserRouter>
  )
}

function Header({ onOpenAuth }: { onOpenAuth: () => void }) {
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const term = query.trim()
    setShowSearch(false)
    navigate(term ? `/search?q=${encodeURIComponent(term)}` : '/search')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-3 py-3">
          <Link to="/" className="flex items-center gap-3 rounded-2xl px-2 py-1.5 transition hover:scale-[1.01]">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007979] to-[#1ca3a3] shadow-lg shadow-[#007979]/25">
              <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pharmaclopedia logo">
                <rect x="14" y="14" width="36" height="36" rx="10" fill="rgba(255,255,255,0.14)"/>
                <path d="M22 20h6v24h-6V20Zm6 0h8v10h-8V20Zm0 12h8v12h-8V32Zm-6 0h6v12h-6V32Zm14-12h6v24h-6V20Zm6 0h6v24h-6V20Z" fill="#E8FFFE"/>
                <circle cx="44" cy="20" r="4" fill="#B7FFF5"/>
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#007979]">PHARMACLOPEDIA</div>
              <div className="text-sm font-medium text-slate-700">Medicine intelligence</div>
            </div>
          </Link>

          <nav className="smart-nav hidden items-center gap-1 rounded-full border border-white/60 bg-white/60 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:flex">
            {primaryLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-pill text-sm font-medium transition ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowSearch((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-[#007979]/20 bg-white/70 px-3 py-2 text-sm font-semibold text-[#007979] shadow-[0_8px_24px_rgba(0,121,121,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,121,121,0.18)]"
            >
              <Search size={16} />
              <span className="hidden sm:inline">Search</span>
            </button>
            <button
              type="button"
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 rounded-full bg-[#007979] px-3.5 py-2 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(0,121,121,0.25)] transition hover:-translate-y-0.5 hover:bg-[#005d5d]"
            >
              <UserRound size={16} />
              <span className="hidden sm:inline">Sign in</span>
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="relative z-10 pb-3">
            <form onSubmit={handleSearch} className="glass-panel flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <Search className="ml-2 text-[#007979]" size={18} />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search medicine, class, or category"
                className="w-full border-0 bg-transparent py-2 pr-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
              <button type="submit" className="rounded-xl bg-[#007979] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#005d5d]">
                Go
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

function AuthModal({
  isOpen,
  onClose,
  onRoleSelect,
  onGuestContinue,
}: {
  isOpen: boolean
  onClose: () => void
  onRoleSelect: (role: RoleKey) => void
  onGuestContinue: () => void
}) {
  const [mode, setMode] = useState<'choice' | 'signin' | 'signup'>('choice')
  const [role, setRole] = useState<RoleKey>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onRoleSelect(role)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[28px] border border-white/60 bg-white/90 p-6 shadow-[0_26px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#007979]">Welcome</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Continue as guest or sign in</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900">
            <X size={16} />
          </button>
        </div>

        {mode === 'choice' && (
          <>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {(['student', 'pharmacist', 'patient'] as RoleKey[]).map((roleKey) => (
                <button
                  key={roleKey}
                  type="button"
                  onClick={() => {
                    setRole(roleKey)
                    setMode('signin')
                  }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-left transition hover:-translate-y-0.5 hover:border-[#007979]/40 hover:bg-[#f4fbfb]"
                >
                  <div className="text-sm font-semibold text-slate-900">{roleDashboards[roleKey].title}</div>
                  <div className="mt-1 text-[11px] text-slate-500">{roleDashboards[roleKey].badge}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <button type="button" onClick={onGuestContinue} className="primary-button flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white">
                <Sparkles size={16} />
                Continue as guest
              </button>
              <button type="button" onClick={() => setMode('signin')} className="secondary-button flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                <LogIn size={16} />
                Sign in
              </button>
              <button type="button" onClick={() => setMode('signup')} className="secondary-button flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                <UserRound size={16} />
                Create account
              </button>
            </div>
          </>
        )}

        {(mode === 'signin' || mode === 'signup') && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Select role</label>
              <select
                value={role}
                onChange={(event) => setRole(event.target.value as RoleKey)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none focus:border-[#007979]/40"
              >
                <option value="student">Student</option>
                <option value="pharmacist">Pharmacist</option>
                <option value="patient">Patient / caregiver</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none focus:border-[#007979]/40"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none focus:border-[#007979]/40"
                required
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <button type="button" onClick={() => setMode('choice')} className="text-sm font-medium text-slate-600 hover:text-slate-900">
                Back
              </button>
              <button type="submit" className="primary-button rounded-2xl px-4 py-3 text-sm font-semibold text-white">
                {mode === 'signin' ? 'Sign in to dashboard' : 'Create account'}
              </button>
            </div>
          </form>
        )}

        <p className="mt-6 text-center text-xs text-slate-500">
          Guest access remains available by default, and accounts are optional for learning and revision.
        </p>
      </div>
    </div>
  )
}

function HomePage({ onOpenAuth }: { onOpenAuth: () => void }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const suggested = ['amoxicillin', 'panadol', 'metformin', 'ventolin', 'loratadine']
  const categories = [...new Set(medicines.flatMap((medicine) => medicine.therapeuticCategories))]

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const term = query.trim()
    navigate(term ? `/search?q=${encodeURIComponent(term)}` : '/search')
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#007979]/20 bg-[#edfdfd] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#007979]">
              <ShieldCheck size={14} />
              Demonstration-ready learning
            </div>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Understand the medicines behind the science.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Explore structured medicine information, learn pharmacology interactively, and test your understanding—all in one place.
            </p>

            <form onSubmit={onSubmit} className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  aria-label="Search medicines"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 py-3 pl-11 pr-4 text-base text-slate-900 outline-none transition focus:border-[#007979]/40 focus:ring-4 focus:ring-[#007979]/10"
                  placeholder="Search a medicine, class, or category"
                />
              </div>
              <button type="submit" className="primary-button inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-white">
                Search
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-2">
              {suggested.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => navigate(`/search?q=${encodeURIComponent(term)}`)}
                  className="rounded-full border border-[#007979]/15 bg-[#f5fdfd] px-3 py-1.5 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:border-[#007979]/30 hover:shadow-[0_10px_20px_rgba(0,121,121,0.08)]"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-2xl border border-white/70 bg-white/60 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              <BrainCircuit size={18} className="text-[#007979]" />
              How it works
            </div>
            <ol className="mt-5 space-y-4">
              {[
                'Search a medicine or drug class.',
                'Read the structured profile and safety notes.',
                'Learn with guided tutor modes and video explanations.',
                'Compare medicines and test your knowledge.',
              ].map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-slate-700">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#007979] text-xs font-bold text-white shadow-[0_10px_18px_rgba(0,121,121,0.2)]">{index + 1}</div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/medicine/amoxicillin/teach" className="inline-flex items-center gap-2 text-sm font-semibold text-[#007979] transition hover:translate-x-0.5">
                Try the demo <ArrowRight size={16} />
              </Link>
              <button type="button" onClick={onOpenAuth} className="secondary-button rounded-full border border-[#007979]/20 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-800">
                Login / Sign up
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Browse by category</h2>
            <span className="text-sm text-slate-500">Curated learning set</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => navigate(`/search?q=${encodeURIComponent(category)}`)}
                className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700 hover:border-teal-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-slate-900">
            <BookOpenText size={18} />
            <h2 className="text-2xl font-semibold">Featured learning paths</h2>
          </div>
          <ul className="space-y-3">
            {[
              'Understand the medicine',
              'Learn the mechanism',
              'Explore the drug class',
              'Review safety and counselling',
            ].map((path) => (
              <li key={path} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-teal-600" />
                {path}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const results = searchMedicines(query)

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Search</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Medicine search</h1>
          </div>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">Back home</Link>
        </div>
      </div>

      {query ? (
        results.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {results.map((medicine) => (
              <div key={medicine.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-xl font-semibold text-slate-900">{medicine.genericName}</h2>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                    {medicine.drugClass}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{medicine.overview}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  {medicine.therapeuticCategories.map((category) => (
                    <span key={category} className="rounded-full bg-teal-50 px-2 py-1 text-teal-700">{category}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
                  <span>{medicine.indications.length} profile sections</span>
                  <Link to={`/medicine/${medicine.id}`} className="inline-flex items-center gap-1 font-semibold text-slate-900">
                    Open profile <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
            <CircleHelp className="mx-auto text-slate-400" size={28} />
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">No verified medicine profile found</h2>
            <p className="mt-2 text-slate-600">
              The current curated database does not contain a verified profile for “{query}”. Try a generic name, drug class, or a wider therapeutic category.
            </p>
            <div className="mt-5 flex justify-center gap-2">
              {['amoxicillin', 'metformin', 'paracetamol', 'salbutamol'].map((term) => (
                <Link key={term} to={`/search?q=${encodeURIComponent(term)}`} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm">
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {medicines.slice(0, 6).map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      )}
    </div>
  )
}

function MedicineCard({ medicine }: { medicine: (typeof medicines)[number] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-slate-900">{medicine.genericName}</h2>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700">{medicine.drugClass}</span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{medicine.overview}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
        {medicine.therapeuticCategories.map((category) => (
          <span key={category} className="rounded-full bg-teal-50 px-2 py-1 text-teal-700">{category}</span>
        ))}
      </div>
      <Link to={`/medicine/${medicine.id}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900">
        View profile <ChevronRight size={16} />
      </Link>
    </div>
  )
}

function MedicineProfilePage() {
  const { id } = useParams()
  const medicine = id ? medicineIndex[id] : undefined

  if (!medicine) {
    return <NotFoundPage />
  }

  const sections = [
    { id: 'overview', title: 'Overview', body: [medicine.overview, `Drug class: ${medicine.drugClass}`, `Therapeutic categories: ${formatList(medicine.therapeuticCategories)}`, `Known brands: ${formatList(medicine.brands)}`] },
    { id: 'how-it-works', title: 'How it works', body: [medicine.mechanismOfAction, `Dosage forms: ${formatList(medicine.dosageForms)}`] },
    { id: 'pharmacokinetics', title: 'Pharmacokinetics', body: [
      `Absorption: ${medicine.pharmacokinetics.absorption ?? 'Not specified in this profile.'}`,
      `Distribution: ${medicine.pharmacokinetics.distribution ?? 'Not specified in this profile.'}`,
      `Metabolism: ${medicine.pharmacokinetics.metabolism ?? 'Not specified in this profile.'}`,
      `Elimination: ${medicine.pharmacokinetics.elimination ?? 'Not specified in this profile.'}`,
    ] },
    { id: 'uses', title: 'Uses', body: medicine.indications.length ? medicine.indications : ['Information not available in this profile.'] },
    { id: 'dosing', title: 'Dosing', body: medicine.dosing?.length ? medicine.dosing : ['Dosing information has not been verified for this medicine in this dataset.'] },
    { id: 'storage', title: 'Storage and administration', body: medicine.storageAndAdministration?.length ? medicine.storageAndAdministration : ['Storage and administration details are not yet verified for this medicine.'] },
    { id: 'safety', title: 'Safety', body: [
      `Adverse effects: ${formatList(medicine.adverseEffects)}`,
      `Contraindications and precautions: ${formatList(medicine.contraindicationsAndPrecautions)}`,
      `Interactions: ${formatList(medicine.interactions)}`,
    ] },
    { id: 'learning', title: 'Learning', body: [
      `Learning points: ${formatList(medicine.learningPoints)}`,
      `Examination pearls: ${formatList(medicine.examinationPearls)}`,
      `Counselling points: ${formatList(medicine.counsellingPoints)}`,
    ] },
    { id: 'references', title: 'References', body: medicine.references.length ? medicine.references.map((reference) => (
      reference.startsWith('http') ? (
        <a key={reference} href={reference} target="_blank" rel="noreferrer" className="text-slate-900 underline underline-offset-2">{reference}</a>
      ) : (
        <span key={reference}>{reference}</span>
      )
    )) : ['References have not been verified for this medicine.'] },
  ]

  const guidedSteps = [
    { label: 'Understand the medicine', target: `/medicine/${medicine.id}#overview` },
    { label: 'Learn its mechanism', target: `/medicine/${medicine.id}#how-it-works` },
    { label: 'Explore the drug class', target: `/medicine/${medicine.id}#learning` },
    { label: 'Watch a relevant video', target: `/medicine/${medicine.id}/teach` },
    { label: 'Compare medicines', target: `/compare?left=${medicine.id}&right=metformin` },
    { label: 'Complete a knowledge check', target: `/medicine/${medicine.id}/quiz` },
  ]

  return (
    <div className="space-y-6">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <Link to="/" className="hover:text-slate-900">Home</Link>
        <ChevronRight size={14} />
        <Link to="/search?q=amoxicillin" className="hover:text-slate-900">Search</Link>
        <ChevronRight size={14} />
        <span className="font-medium text-slate-900">{medicine.genericName}</span>
      </nav>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Medicine profile</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">{medicine.genericName}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700">{medicine.drugClass}</span>
              {medicine.therapeuticCategories.map((category) => (
                <span key={category} className="rounded-full bg-teal-50 px-2.5 py-1 font-medium text-teal-700">{category}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to={`/medicine/${medicine.id}/teach`} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Teach Me This Drug</Link>
            <Link to={`/compare?left=${medicine.id}&right=paracetamol`} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:border-slate-300">Compare</Link>
            <Link to={`/medicine/${medicine.id}/quiz`} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:border-slate-300">Test My Knowledge</Link>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm xl:sticky xl:top-24 xl:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Sections</p>
          <nav className="mt-3 space-y-1 text-sm">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="block rounded-xl px-3 py-2 font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900">
                {section.title}
              </a>
            ))}
            <Link to={`/search?q=${encodeURIComponent(medicine.genericName)}`} className="mt-3 block rounded-xl bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800">
              Search related medicines
            </Link>
          </nav>
        </aside>

        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                {section.body.map((item, index) => (
                  <li key={`${section.id}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <Stethoscope size={18} />
              <h2 className="text-2xl font-semibold">Guided learning path</h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {guidedSteps.map((step, index) => (
                <Link key={step.label} to={step.target} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700 hover:border-slate-300">
                  <span>{index + 1}. {step.label}</span>
                  <ChevronRight size={16} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function TeachPage() {
  const { id } = useParams()
  const medicine = id ? findMedicineById(id) : undefined
  const [mode, setMode] = useState<LessonMode>('explain-simply')
  const [prompt, setPrompt] = useState<string | null>(null)

  if (!medicine) return <NotFoundPage />

  const lesson = buildLessonContent(medicine, mode)
  const videos = getVideosForMedicine(medicine.id)
  const followUps = getSuggestedQuestions(medicine.id)

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Demonstration tutor</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Teach Me {medicine.genericName}</h1>
          </div>
          <div className="flex gap-2">
            <Link to={`/medicine/${medicine.id}`} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900">Profile</Link>
            <Link to={`/compare?left=${medicine.id}&right=paracetamol`} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Compare</Link>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Learning mode</p>
          <div className="mt-4 space-y-2">
            {Object.entries(lessonModes).map(([key, modeInfo]) => (
              <button
                key={key}
                type="button"
                onClick={() => setMode(key as LessonMode)}
                className={`w-full rounded-xl border p-3 text-left transition ${mode === key ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'}`}
              >
                <div className="font-semibold">{modeInfo.title}</div>
                <div className={`mt-1 text-xs ${mode === key ? 'text-slate-200' : 'text-slate-500'}`}>{modeInfo.description}</div>
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <BookOpenText size={18} />
              <h2 className="text-2xl font-semibold">{lessonModes[mode].title}</h2>
            </div>
            <p className="mt-4 text-base leading-7 text-slate-700">{lesson.introduction}</p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Key learning points</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {lesson.keyPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Follow-up questions</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {lesson.followUpQuestions.map((question) => (
                    <li key={question}>
                      <button type="button" onClick={() => setPrompt(question)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-left hover:border-slate-300">
                        {question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Suggested prompts</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {followUps.map((question) => (
                    <li key={question}>
                      <button type="button" onClick={() => setPrompt(question)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-left hover:border-slate-300">
                        {question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {prompt && (
              <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-4 text-sm text-slate-700">
                <div className="flex items-center gap-2 text-teal-800">
                  <BrainCircuit size={16} />
                  <span className="font-semibold">Demonstration tutor response</span>
                </div>
                <p className="mt-3 leading-6">{prompt} This is a demonstration explanation based on the curated medicine data, not a live AI-generated diagnosis or prescribing recommendation.</p>
              </div>
            )}
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <Video size={18} />
              <h2 className="text-2xl font-semibold">Watch and Learn</h2>
            </div>
            <div className="mt-4 space-y-4">
              {videos.length ? videos.map((video) => (
                <div key={video.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{video.title}</h3>
                      <p className="text-sm text-slate-600">{video.creator} • {video.platform}</p>
                    </div>
                    <a href={video.sourceUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-900">Open source</a>
                  </div>
                  <p className="text-sm text-slate-700">{video.description}</p>
                  {video.embedUrl ? (
                    <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-slate-200 bg-black">
                      <iframe
                        title={video.title}
                        src={video.embedUrl}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white p-3 text-sm text-slate-600">
                      This recommendation is available on the source platform but cannot be embedded in this environment.
                    </div>
                  )}
                </div>
              )) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
                  No reviewed video is currently linked to this medicine. The lesson remains available with the curated medicine profile and tutor content.
                </div>
              )}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <FlaskConical size={18} />
              <h2 className="text-2xl font-semibold">Revision summary</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {lesson.revisionSummary.map((point) => (
                <li key={point} className="rounded-xl border border-slate-200 bg-slate-50 p-3">{point}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to={`/medicine/${medicine.id}/quiz`} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Launch quiz</Link>
              <Link to={`/compare?left=${medicine.id}&right=paracetamol`} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900">Compare</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function ComparePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const leftId = searchParams.get('left') ?? 'amoxicillin'
  const rightId = searchParams.get('right') ?? 'metformin'
  const left = medicineIndex[leftId] ?? medicines[0]
  const right = medicineIndex[rightId] ?? medicines[1]

  const fields = [
    { label: 'Drug class', left: left.drugClass, right: right.drugClass },
    { label: 'Mechanism of action', left: left.mechanismOfAction, right: right.mechanismOfAction },
    { label: 'Indications', left: formatList(left.indications), right: formatList(right.indications) },
    { label: 'Dosage forms', left: formatList(left.dosageForms), right: formatList(right.dosageForms) },
    { label: 'Common adverse effects', left: formatList(left.adverseEffects), right: formatList(right.adverseEffects) },
    { label: 'Important safety considerations', left: formatList(left.contraindicationsAndPrecautions), right: formatList(right.contraindicationsAndPrecautions) },
    { label: 'Relevant interactions', left: formatList(left.interactions), right: formatList(right.interactions) },
    { label: 'Counselling considerations', left: formatList(left.counsellingPoints), right: formatList(right.counsellingPoints) },
  ]

  const summary = useMemo(() => {
    const differences = [
      `${left.genericName} is a ${left.drugClass.toLowerCase()} medicine, while ${right.genericName} is a ${right.drugClass.toLowerCase()} medicine.`,
      `${left.genericName} is commonly used for ${left.indications[0] || 'selected conditions'}, whereas ${right.genericName} is more relevant to ${right.indications[0] || 'different therapeutic contexts'}.`,
      'These medicines should not be considered interchangeable based on shared indications alone; therapeutic selection depends on clinical context and safety considerations.'
    ]
    return differences.join(' ')
  }, [left, right])

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Drug comparison</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Compare medicines</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <select
              value={leftId}
              onChange={(event) => setSearchParams({ left: event.target.value, right: rightId })}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800"
            >
              {medicines.map((medicine) => (
                <option key={medicine.id} value={medicine.id}>{medicine.genericName}</option>
              ))}
            </select>
            <select
              value={rightId}
              onChange={(event) => setSearchParams({ left: leftId, right: event.target.value })}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800"
            >
              {medicines.map((medicine) => (
                <option key={medicine.id} value={medicine.id}>{medicine.genericName}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Summary</p>
        <p className="text-base leading-7 text-slate-700">{summary}</p>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        {[left, right].map((medicine) => (
          <div key={medicine.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">{medicine.genericName}</h2>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700">{medicine.drugClass}</span>
            </div>
            <p className="text-sm text-slate-600">{medicine.overview}</p>
          </div>
        ))}
      </div>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-[1fr_1fr] border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-500">
          <div className="px-4 py-3">{left.genericName}</div>
          <div className="px-4 py-3">{right.genericName}</div>
        </div>
        {fields.map((field) => (
          <div key={field.label} className="grid grid-cols-[1fr_1fr] border-b border-slate-200 last:border-b-0">
            <div className="border-r border-slate-200 px-4 py-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{field.label}</div>
              <p className="text-sm leading-6 text-slate-700">{field.left}</p>
            </div>
            <div className="px-4 py-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{field.label}</div>
              <p className="text-sm leading-6 text-slate-700">{field.right}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

function QuizPage() {
  const { id } = useParams()
  const medicine = id ? findMedicineById(id) : undefined
  const questions = medicine ? getQuizForMedicine(medicine.id) : []
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<Record<string, number | null>>({})
  const [submitted, setSubmitted] = useState(false)
  const [review, setReview] = useState<ReturnType<typeof calculateQuizResult> | null>(null)

  if (!medicine) return <NotFoundPage />
  if (!questions.length) {
    return <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm"><p className="text-lg font-semibold text-slate-900">No quiz is currently available for this medicine.</p></div>
  }

  const question = questions[currentIndex]
  const currentSelection = selectedIndex[question.id] ?? null
  const isCorrect = currentSelection !== null && question.options[currentSelection] === question.correctAnswer

  const handleSubmit = () => {
    if (currentSelection === null) return
    setSubmitted(true)
  }

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((current) => current + 1)
      setSubmitted(false)
      return
    }

    const answers = questions.reduce<Record<string, string>>((accumulator, item) => {
      const answerIndex = selectedIndex[item.id]
      if (answerIndex !== null && answerIndex !== undefined) {
        accumulator[item.id] = item.options[answerIndex]
      }
      return accumulator
    }, {})

    setReview(calculateQuizResult(questions, answers))
  }

  if (review) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Knowledge check complete</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Your score: {review.score}/{review.total}</h1>
        <p className="mt-4 text-slate-700">This review is based on the structured medicine profile and verified learning content. A higher score indicates stronger recall of core concepts.</p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Review</p>
          <ul className="mt-2 space-y-2">
            {questions.map((item, index) => {
              const answerIndex = selectedIndex[item.id] ?? null
              const selectedAnswer = answerIndex === null ? 'Not answered' : item.options[answerIndex] ?? 'Not answered'
              return (
                <li key={item.id} className="rounded-lg border border-slate-200 bg-white p-3">
                  <div className="font-medium">Q{index + 1}: {item.question}</div>
                  <div className="mt-1 text-slate-600">Your answer: {selectedAnswer}</div>
                  <div className="mt-1 text-teal-700">Explanation: {item.explanation}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => window.location.reload()} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Retry quiz</button>
          <Link to={`/medicine/${medicine.id}`} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900">Return to profile</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Quiz</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{medicine.genericName} knowledge check</h1>
        </div>
        <div className="text-sm font-medium text-slate-600">{currentIndex + 1}/{questions.length}</div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-lg font-semibold text-slate-900">{question.question}</p>
        <div className="mt-4 space-y-3">
          {question.options.map((option, index) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelectedIndex((previous) => ({ ...previous, [question.id]: index }))
              }}
              className={`block w-full rounded-xl border px-4 py-3 text-left text-sm transition ${currentSelection === index ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {submitted && (
        <div className={`mt-6 rounded-2xl border p-4 text-sm ${isCorrect ? 'border-teal-200 bg-teal-50 text-teal-800' : 'border-amber-200 bg-amber-50 text-amber-800'}`}>
          <div className="font-semibold">{isCorrect ? 'Correct' : 'Not quite'}</div>
          <p className="mt-2 leading-6">{question.explanation}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {!submitted ? (
          <button type="button" onClick={handleSubmit} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400" disabled={currentSelection === null}>Submit answer</button>
        ) : (
          <button type="button" onClick={handleNextQuestion} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">{currentIndex === questions.length - 1 ? 'See results' : 'Next question'}</button>
        )}
      </div>
    </div>
  )
}

function AccountPage({
  selectedRole,
  onSelectRole,
  isAuthenticated,
}: {
  selectedRole: RoleKey
  onSelectRole: (role: RoleKey) => void
  isAuthenticated: boolean
}) {
  const activeRole = selectedRole
  const dashboard = roleDashboards[activeRole]

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{isAuthenticated ? 'Signed in dashboard' : 'Guest access'}</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">{dashboard.title} workspace</h1>
            <p className="mt-3 max-w-3xl text-slate-700">{dashboard.summary}</p>
          </div>
          <div className="rounded-full border border-[#007979]/15 bg-[#eefdfd] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#007979]">
            {dashboard.badge}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {(['student', 'pharmacist', 'patient'] as RoleKey[]).map((roleKey) => (
            <button
              key={roleKey}
              type="button"
              onClick={() => onSelectRole(roleKey)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeRole === roleKey ? 'bg-[#007979] text-white shadow-[0_12px_24px_rgba(0,121,121,0.18)]' : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}
            >
              {roleDashboards[roleKey].title}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Key features</h2>
            <ul className="mt-4 space-y-3">
              {dashboard.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#007979]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Quick actions</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {dashboard.quickActions.map(({ label, to }) => (
                <Link key={label} to={to} className="rounded-full border border-[#007979]/20 bg-[#f3fbfb] px-4 py-2 text-sm font-semibold text-[#007979] transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,121,121,0.08)]">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Session status</h2>
          <div className="mt-4 rounded-2xl border border-[#007979]/15 bg-[#f4fbfb] p-4 text-sm text-slate-700">
            {isAuthenticated ? (
              <>
                <div className="font-semibold text-slate-900">Signed in as {dashboard.title}</div>
                <p className="mt-2">Your personalised dashboard is ready with role-specific learning and reference tools.</p>
              </>
            ) : (
              <>
                <div className="font-semibold text-slate-900">Guest mode active</div>
                <p className="mt-2">You can still browse all medicines, search, compare, and learn without creating an account.</p>
              </>
            )}
          </div>

          <div className="mt-5 space-y-3">
            <Link to="/search?q=amoxicillin" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700 hover:border-slate-300">
              Search medicines <ChevronRight size={16} />
            </Link>
            <Link to="/compare?left=amoxicillin&right=metformin" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700 hover:border-slate-300">
              Compare medicines <ChevronRight size={16} />
            </Link>
            <Link to="/about" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700 hover:border-slate-300">
              Learn the product <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">About</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Nigeria’s medicine intelligence platform</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Pharmaclopedia brings together structured medicine information, educational learning, comparison, and revision into one place. The product is designed to support pharmacy students and healthcare learners who need clear, trustworthy educational explanations rather than generic chatbot output.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {[
          { icon: Search, title: 'Search', text: 'Find medicine information using generic names, class descriptions, and relevant therapeutic terms.' },
          { icon: BookOpenText, title: 'Learn', text: 'Understand mechanisms, indications, safety notes, and learning points in a guided teaching flow.' },
          { icon: FlaskConical, title: 'Revise', text: 'Use comparisons and quizzes to test recall and consolidate core pharmacology concepts.' },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Icon className="text-slate-900" size={22} />
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Route not found</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">This page is not available yet.</h1>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
        Return home <ArrowRight size={16} />
      </Link>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-semibold text-slate-900">PHARMACLOPEDIA</div>
          <div>Find it. Understand it. Master it.</div>
        </div>
        <div className="max-w-xl text-sm leading-6">
          Pharmaclopedia is an educational medicine-information platform. It does not replace professional medical advice, prescribing information, or the judgment of a qualified healthcare professional. Verify important clinical decisions against appropriate authoritative sources.
        </div>
      </div>
    </footer>
  )
}

export default App
