import Image from 'next/image';

const menuItems = [
  { label: 'Преимущества', id: 'advantages' },
  { label: 'Где работаем', id: 'areas' },
  { label: 'Техника', id: 'equipment' },
  { label: 'Этапы', id: 'process' },
  { label: 'Заявка', id: 'cta-final' },
];

const heroChips = ['Сложный рельеф', 'Дистанционное управление', 'Быстрый выезд'];

const heroQuickBenefits = [
  'Работаем на склонах',
  'Управление с пульта',
  'Для высокой травы',
];

const advantages = [
  {
    title: 'Работа на склонах',
    text: 'Техника уверенно работает на откосах, неровностях и участках, где ручной покос опасен.',
  },
  {
    title: 'Безопасность оператора',
    text: 'Оператор управляет косилкой дистанционно и не идёт по сложному рельефу пешком.',
  },
  {
    title: 'Высокая производительность',
    text: 'Быстро обрабатываем большие площади, заросшие территории и тяжёлые участки.',
  },
  {
    title: 'Аккуратный результат',
    text: 'Подходит для частных, коммерческих и технических территорий, где важен порядок.',
  },
];

const workAreas = [
  'Частные участки',
  'Обочины и откосы',
  'Промышленные территории',
  'СНТ и коттеджные посёлки',
  'Склады и базы',
  'Заброшенные и заросшие территории',
];

const machineList = [
  'Гусеничная база',
  'Уверенная работа на рельефе',
  'Дистанционное управление',
  'Для высокой травы и сложных зон',
];

const slopesList = [
  'Работа на уклонах и откосах',
  'Покос высокой травы и поросли',
  'Дистанционное управление с безопасной позиции',
  'Подходит для обочин, склонов, промзон и заброшенных территорий',
];

const processSteps = ['Заявка', 'Оценка участка', 'Выезд техники', 'Покос и сдача результата'];

export default function Home() {
  return (
    <div className="page-shell" id="top">
      <header className="header-wrap">
        <div className="header container">
          <a href="#top" className="brand" aria-label="GAZKAS — наверх">
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
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">УСЛУГА GAZKAS</p>
              <h1>Покос травы на сложных участках</h1>
              <p className="hero-lead">
                Склоны, обочины, заросли, промзоны, частные и коммерческие территории
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#cta-final">
                  Рассчитать стоимость
                </a>
                <a className="btn btn-ghost" href="#cta-final">
                  Получить консультацию
                </a>
              </div>

              <ul className="chip-list" aria-label="Преимущества услуги">
                {heroChips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>

              <ul className="quick-benefits" aria-label="Ключевые особенности">
                {heroQuickBenefits.map((item) => (
                  <li key={item}>
                    <span className="line-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-media-wrap" aria-hidden="true">
              <Image
                className="hero-media"
                src="/images/gazkas-service/hero-mower-1.png"
                alt=""
                width={1600}
                height={1000}
                priority
              />
              <div className="hero-media-shine" />
            </div>
          </div>
        </section>

        <section id="advantages" className="section container">
          <div className="section-head">
            <p className="section-kicker">Преимущества</p>
            <h2>Профессиональный покос там, где обычная техника не справляется</h2>
          </div>
          <div className="advantages-grid">
            {advantages.map((item, index) => (
              <article className="premium-card" key={item.title}>
                <p className="card-index">0{index + 1}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="areas" className="section container">
          <div className="section-head">
            <p className="section-kicker">Где выполняем работы</p>
            <h2>Берём в работу частные, коммерческие и технические территории</h2>
          </div>
          <div className="areas-grid">
            {workAreas.map((item, index) => (
              <article className="area-card" key={item}>
                <span className="area-icon" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{item}</h3>
                <p>Подбираем оптимальный режим покоса под рельеф, высоту травы и тип участка.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="equipment" className="section container media-section">
          <div className="media-content">
            <p className="section-kicker">Наша техника</p>
            <h2>Мощная дистанционно управляемая косилка для сложных зон</h2>
            <p>
              Для покоса используется мощная дистанционно управляемая гусеничная косилка,
              рассчитанная на сложный рельеф, высокую траву и труднодоступные зоны.
            </p>
            <ul className="feature-list">
              {machineList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="media-image-wrap">
            <Image
              className="media-image"
              src="/images/gazkas-service/hero-mower-1.png"
              alt="Косилка GAZKAS в высокой траве"
              width={1400}
              height={920}
            />
          </div>
        </section>

        <section className="section container slope-section">
          <div className="slope-image-wrap">
            <Image
              className="slope-image"
              src="/images/gazkas-service/slope-mower-1.png"
              alt="Косилка GAZKAS работает на склоне"
              width={1400}
              height={980}
            />
          </div>
          <div className="slope-content">
            <p className="section-kicker">Сложный рельеф</p>
            <h2>Покос на склонах и труднодоступных участках</h2>
            <p>Работаем там, где ручной труд опасен, медленный или неэффективный.</p>
            <ul className="feature-list">
              {slopesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="section container">
          <div className="section-head">
            <p className="section-kicker">Как мы работаем</p>
            <h2>Чёткий процесс без лишней нагрузки для клиента</h2>
          </div>
          <ol className="process-line">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="cta-final" className="section container">
          <div className="final-cta">
            <div className="final-text">
              <p className="section-kicker">Заявка</p>
              <h2>Нужен покос травы без лишней нагрузки?</h2>
              <p>
                Пришлите описание участка или оставьте заявку — подскажем формат работы и
                рассчитаем стоимость.
              </p>
              <a className="btn btn-primary" href="#top">
                Оставить заявку
              </a>
            </div>
            <Image
              className="final-image"
              src="/images/gazkas-service/hero-mower-1.png"
              alt="Техника GAZKAS"
              width={1100}
              height={820}
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <p className="brand">GAZKAS</p>
          <p>Услуги покоса травы на сложных участках</p>
          <p>
            <a href="tel:+78129811010">8 (812) 981-10-10</a>
          </p>
          <p>
            <a href="mailto:info@gazkas.ru">info@gazkas.ru</a>
          </p>
          <p>
            <a href="https://gazkas.ru" rel="noreferrer" target="_blank">
              gazkas.ru
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
