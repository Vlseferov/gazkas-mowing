const menuItems = [
  { label: 'Преимущества', id: 'advantages' },
  { label: 'Где работаем', id: 'areas' },
  { label: 'Техника', id: 'equipment' },
  { label: 'Этапы', id: 'process' },
  { label: 'Заявка', id: 'cta-final' },
];

const benefits = [
  'Работа на склонах',
  'Безопасность оператора',
  'Высокая производительность',
  'Аккуратный результат',
];

const workAreas = [
  'Частные участки',
  'Обочины и откосы',
  'Промышленные территории',
  'СНТ и коттеджные посёлки',
  'Склады и базы',
  'Заброшенные и заросшие территории',
];

const processSteps = ['Заявка', 'Уточнение задачи', 'Выезд и покос', 'Сдача результата'];

function ImageFallback({
  className,
  imagePath,
  label,
}: {
  className: string;
  imagePath: string;
  label: string;
}) {
  return (
    <div
      className={className}
      role="img"
      aria-label={label}
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(7, 7, 7, 0.55), rgba(11, 11, 11, 0.85)), url('${imagePath}')`,
      }}
    >
      <span className="placeholder-chip">GAZKAS</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <header className="header container">
        <a href="#top" className="brand" id="top">
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
      </header>

      <main>
        <section className="hero container section">
          <div className="hero-content">
            <p className="eyebrow">Услуга GAZKAS</p>
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
              <li>Работа на сложном рельефе</li>
              <li>Дистанционное управление</li>
              <li>Быстрый выезд</li>
            </ul>
          </div>
          <ImageFallback
            className="hero-media"
            imagePath="/images/gazkas-service/hero-mower-1.png"
            label="Чёрно-жёлтая гусеничная дистанционно управляемая косилка GAZKAS в высокой траве"
          />
        </section>

        <section id="advantages" className="container section">
          <h2>Преимущества</h2>
          <div className="grid four">
            {benefits.map((item) => (
              <article className="card" key={item}>
                <h3>{item}</h3>
                <p>Надёжная работа в условиях сложного ландшафта и плотной растительности.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="areas" className="container section">
          <h2>Где выполняем работы</h2>
          <div className="grid three">
            {workAreas.map((item) => (
              <article className="card" key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="equipment" className="container section split">
          <div>
            <h2>Наша техника</h2>
            <ul className="feature-list">
              <li>Гусеничная база</li>
              <li>Уверенная работа на рельефе</li>
              <li>Дистанционное управление</li>
              <li>Для высокой травы и сложных зон</li>
            </ul>
          </div>
          <ImageFallback
            className="equipment-media"
            imagePath="/images/gazkas-service/slope-mower-1.png"
            label="Чёрно-жёлтая гусеничная косилка GAZKAS на склоне"
          />
        </section>

        <section className="container section highlight">
          <h2>Покос на склонах и труднодоступных участках</h2>
          <ul className="feature-list">
            <li>Работаем там, где ручной труд опасен и неэффективен</li>
            <li>Сохраняем устойчивость на уклонах</li>
            <li>Техника справляется с высокой травой, кустарником и порослью</li>
          </ul>
        </section>

        <section id="process" className="container section">
          <h2>Как мы работаем</h2>
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
          <h2>Нужен покос травы без лишней нагрузки?</h2>
          <a className="btn btn-primary" href="#top">
            Оставить заявку
          </a>
        </section>
      </main>

      <footer className="footer container">
        <p className="brand">GAZKAS</p>
        <p>Услуги покоса травы на сложных участках</p>
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
      </footer>
    </div>
  );
}
