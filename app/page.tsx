const menuItems = [
  { label: 'Преимущества', id: 'advantages' },
  { label: 'Где работаем', id: 'areas' },
  { label: 'Техника', id: 'equipment' },
  { label: 'Этапы', id: 'process' },
  { label: 'Заявка', id: 'cta-final' },
];

const benefits = [
  {
    title: 'Работа на склонах',
    description:
      'Техника уверенно работает на откосах, неровностях и участках, где ручной покос опасен.',
  },
  {
    title: 'Безопасность оператора',
    description: 'Оператор управляет косилкой дистанционно и не идёт по сложному рельефу пешком.',
  },
  {
    title: 'Высокая производительность',
    description: 'Быстро обрабатываем большие площади, заросшие территории и тяжёлые участки.',
  },
  {
    title: 'Аккуратный результат',
    description: 'Подходит для частных, коммерческих и технических территорий, где важен порядок.',
  },
];

const workAreas = [
  { icon: '⌂', title: 'Частные участки' },
  { icon: '⟋', title: 'Обочины и откосы' },
  { icon: '⚙', title: 'Промышленные территории' },
  { icon: '▦', title: 'СНТ и коттеджные посёлки' },
  { icon: '▣', title: 'Склады и базы' },
  { icon: '◧', title: 'Заброшенные и заросшие территории' },
];

const processSteps = ['Заявка', 'Оценка участка', 'Выезд техники', 'Покос и сдача результата'];

function MediaCard({ className, imagePath, label }: { className: string; imagePath: string; label: string }) {
  return (
    <div
      className={className}
      role="img"
      aria-label={label}
      style={{
        backgroundImage: `linear-gradient(140deg, rgba(10, 10, 10, 0.02), rgba(10, 10, 10, 0.22)), url('${imagePath}')`,
      }}
    >
      <span className="media-badge">GAZKAS</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-shell" id="top">
      <header className="header-wrap">
        <div className="header container">
          <a href="#top" className="brand">
            GAZKAS
          </a>

          <nav className="nav" aria-label="Основная навигация">
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="btn btn-primary" href="#cta-final">
            Оставить заявку
          </a>
        </div>
      </header>

      <main>
        <section className="hero container section">
          <div className="hero-content">
            <p className="eyebrow">УСЛУГА GAZKAS</p>
            <h1>Покос травы на сложных участках</h1>
            <p className="lead">
              Склоны, обочины, заросли, промзоны, частные и коммерческие территории
            </p>

            <div className="actions">
              <a className="btn btn-primary" href="#cta-final">
                Рассчитать стоимость
              </a>
              <a className="btn btn-secondary" href="#cta-final">
                Получить консультацию
              </a>
            </div>

            <ul className="chips" aria-label="Ключевые преимущества">
              <li>Сложный рельеф</li>
              <li>Дистанционное управление</li>
              <li>Быстрый выезд</li>
            </ul>
          </div>

          <MediaCard
            className="hero-media"
            imagePath="/images/gazkas-service/hero-mower-1.png"
            label="Чёрно-жёлтая гусеничная дистанционно управляемая косилка GAZKAS в высокой траве"
          />
        </section>

        <section id="advantages" className="container section">
          <div className="section-head">
            <p className="eyebrow">Преимущества GAZKAS</p>
            <h2>Надёжная работа на сложных участках</h2>
          </div>

          <div className="grid benefits-grid">
            {benefits.map((item, index) => (
              <article className="card premium-card" key={item.title}>
                <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="areas" className="container section">
          <div className="section-head">
            <p className="eyebrow">Где выполняем работы</p>
            <h2>Работаем на частных, коммерческих и технических территориях</h2>
          </div>

          <div className="grid area-grid">
            {workAreas.map((item) => (
              <article className="card area-card" key={item.title}>
                <span className="area-icon" aria-hidden>
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="equipment" className="container section split polished-block">
          <div>
            <p className="eyebrow">Наша техника</p>
            <h2>Наша техника</h2>
            <p className="lead section-lead">
              Для покоса используется мощная дистанционно управляемая гусеничная косилка,
              рассчитанная на сложный рельеф, высокую траву и труднодоступные зоны.
            </p>
            <ul className="feature-list">
              <li>Гусеничная база</li>
              <li>Уверенная работа на рельефе</li>
              <li>Дистанционное управление</li>
              <li>Для высокой травы и сложных зон</li>
            </ul>
          </div>

          <MediaCard
            className="equipment-media"
            imagePath="/images/gazkas-service/hero-mower-1.png"
            label="Гусеничная косилка GAZKAS для покоса на сложном рельефе"
          />
        </section>

        <section className="container section split polished-block highlight-block">
          <MediaCard
            className="slope-media"
            imagePath="/images/gazkas-service/slope-mower-1.png"
            label="Гусеничная косилка GAZKAS на склонах и труднодоступных участках"
          />

          <div>
            <p className="eyebrow">Склоны и трудные зоны</p>
            <h2>Покос на склонах и труднодоступных участках</h2>
            <p className="lead section-lead">
              Работаем там, где ручной труд опасен, медленный или неэффективный.
            </p>
            <ul className="feature-list">
              <li>Работа на уклонах и откосах</li>
              <li>Покос высокой травы и поросли</li>
              <li>Дистанционное управление с безопасной позиции</li>
              <li>Подходит для обочин, склонов, промзон и заброшенных территорий</li>
            </ul>
          </div>
        </section>

        <section id="process" className="container section">
          <div className="section-head">
            <p className="eyebrow">Как мы работаем</p>
            <h2>Чёткий процесс без лишней нагрузки для клиента</h2>
          </div>

          <ol className="steps">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="cta-final" className="container section final-cta">
          <div className="cta-inner">
            <h2>Нужен покос травы без лишней нагрузки?</h2>
            <p>
              Пришлите описание участка или оставьте заявку — подскажем формат работы и
              рассчитаем стоимость.
            </p>
            <a className="btn btn-primary" href="#top">
              Оставить заявку
            </a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div>
          <p className="brand">GAZKAS</p>
          <p>Услуги покоса травы на сложных участках</p>
        </div>

        <div className="footer-contacts">
          <p>
            <a href="tel:+78129811010">8 (812) 981-10-10</a>
          </p>
          <p>
            <a href="mailto:info@gazkas.ru">info@gazkas.ru</a>
          </p>
          <p>
            <a href="https://gazkas.ru" target="_blank" rel="noreferrer">
              gazkas.ru
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
