import Image from 'next/image';

const menuItems = [
  { label: 'Преимущества', id: 'advantages' },
  { label: 'Где работаем', id: 'areas' },
  { label: 'Парк техники', id: 'fleet' },
  { label: 'Этапы', id: 'process' },
  { label: 'Заявка', id: 'cta-final' },
];

const heroPoints = ['Сложный рельеф', 'Откосы и обочины', 'Промзоны и частные участки'];

const advantages = [
  {
    title: 'Безопасно на сложном рельефе',
    text: 'Оператор управляет работой дистанционно и не идет пешком по откосу, канаве или зарослям.',
  },
  {
    title: 'Стабильный результат на сложной траве',
    text: 'Высокая трава, поросль, заброшенные зоны и плотные участки — рабочий сценарий, а не исключение.',
  },
  {
    title: 'Быстрый выезд и четкая логистика',
    text: 'Работаем по согласованному окну: осмотр, расчет, выезд техники и сдача результата без затяжек.',
  },
  {
    title: 'Премиальный сервисный подход',
    text: 'Аккуратная работа на частных и коммерческих объектах, где важны качество, сроки и внешний вид.',
  },
];

const areaCards = [
  {
    title: 'Склоны и откосы',
    text: 'Береговые линии, насыпи, кюветы, сложные перепады высоты.',
    image: '/images/gazkas-service/slope-work.svg',
  },
  {
    title: 'Заросшие участки',
    text: 'Высокая трава, густая поросль, заброшенные территории.',
    image: '/images/gazkas-service/overgrown-zone.svg',
  },
  {
    title: 'Промышленные площадки',
    text: 'Склады, базы, технические территории и периметры.',
    image: '/images/gazkas-service/industrial-territory.svg',
  },
  {
    title: 'Частные и коммерческие объекты',
    text: 'Участки, поселки, территории ЖК, офисные и торговые зоны.',
    image: '/images/gazkas-service/after-result.svg',
  },
];

const fleetFeatures = [
  'Специализированная дистанционно управляемая техника GAZKAS',
  'Гусеничная база для уверенной работы на неровном покрытии',
  'Работа в зонах, где обычные косилки и ручной труд неэффективны',
  'Регулярное сервисное обслуживание и готовность к выезду',
];

const processSteps = [
  {
    title: 'Заявка и вводные',
    text: 'Получаем адрес, фото/видео и задачу по участку.',
  },
  {
    title: 'Оценка и предложение',
    text: 'Фиксируем объем, сроки, стоимость и формат работ.',
  },
  {
    title: 'Выезд техники',
    text: 'Работаем на объекте по согласованному плану и графику.',
  },
  {
    title: 'Сдача результата',
    text: 'Передаем готовый участок и рекомендации по поддержанию.',
  },
];

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
              <p className="eyebrow">Сервисное направление GAZKAS</p>
              <h1>Покос травы на участках, где обычная техника не проходит</h1>
              <p className="hero-lead">
                Профессионально работаем на склонах, откосах, обочинах, в зарослях и на технических
                территориях. Ставка на безопасность, скорость и аккуратный результат.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#cta-final">
                  Рассчитать стоимость
                </a>
                <a className="btn btn-ghost" href="#brand-link">
                  О бренде GAZKAS
                </a>
              </div>

              <ul className="chip-list" aria-label="Ключевые сценарии работ">
                {heroPoints.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </div>

            <div className="hero-media-wrap">
              <Image
                className="hero-media"
                src="/images/gazkas-service/hero-premium.svg"
                alt="Техника GAZKAS на сложном участке"
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
            <h2>Сильная техника и сервисный подход в одной услуге</h2>
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
            <h2>Каждый блок со своей задачей и своим рабочим сценарием</h2>
          </div>

          <div className="areas-showcase">
            {areaCards.map((card) => (
              <article className="visual-card" key={card.title}>
                <div className="visual-media-wrap">
                  <Image
                    className="visual-media"
                    src={card.image}
                    alt={card.title}
                    width={1600}
                    height={1000}
                  />
                </div>
                <div className="visual-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="fleet" className="section container fleet-section">
          <div className="fleet-layout">
            <div className="fleet-main-image-wrap">
              <Image
                className="fleet-main-image"
                src="/images/gazkas-service/fleet-park.svg"
                alt="Парк техники GAZKAS"
                width={1600}
                height={1000}
              />
            </div>
            <div className="fleet-content">
              <p className="section-kicker">Наша техника / парк техники</p>
              <h2>Используем специализированную технику GAZKAS для сложных участков</h2>
              <p>
                На выезд выходит профильная дистанционно управляемая техника бренда GAZKAS. Это
                позволяет уверенно работать там, где ручной покос неудобен, медленный или опасный.
              </p>
              <ul className="feature-list">
                {fleetFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="fleet-subgrid">
            <div className="mini-media-wrap">
              <Image
                className="mini-media"
                src="/images/gazkas-service/operator-control.svg"
                alt="Оператор управляет техникой GAZKAS"
                width={1600}
                height={1000}
              />
            </div>
            <div className="mini-media-wrap">
              <Image
                className="mini-media"
                src="/images/gazkas-service/slope-work.svg"
                alt="Работа техники GAZKAS на откосе"
                width={1600}
                height={1000}
              />
            </div>
          </div>
        </section>

        <section id="process" className="section container">
          <div className="section-head">
            <p className="section-kicker">Как мы работаем</p>
            <h2>Прозрачный процесс от заявки до финального результата</h2>
          </div>
          <ol className="process-line">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="brand-link" className="section container">
          <div className="brand-block">
            <div className="brand-copy">
              <p className="section-kicker">Связь с основным направлением</p>
              <h2>Это сервисное направление GAZKAS</h2>
              <p>
                Мы не просто оказываем услугу покоса — мы развиваем и используем профильную технику
                GAZKAS для сложных задач на реальных объектах.
              </p>
              <p>
                Если вам важно посмотреть основное направление и технику, переходите на главный сайт
                бренда.
              </p>
              <a className="btn btn-primary" href="https://gazkas.ru" target="_blank" rel="noreferrer">
                Перейти на gazkas.ru
              </a>
            </div>
            <div className="brand-image-wrap">
              <Image
                className="brand-image"
                src="/images/gazkas-service/brand-gazkas.svg"
                alt="Техника GAZKAS как часть брендового направления"
                width={1600}
                height={1000}
              />
            </div>
          </div>
        </section>

        <section id="cta-final" className="section container">
          <div className="final-cta">
            <div className="final-text">
              <p className="section-kicker">Заявка</p>
              <h2>Нужен профессиональный покос на сложном участке?</h2>
              <p>
                Отправьте адрес и краткое описание. Быстро оценим объем, предложим формат работ и
                согласуем выезд техники.
              </p>
              <a className="btn btn-primary" href="tel:+78129811010">
                Связаться: 8 (812) 981-10-10
              </a>
            </div>
            <div className="final-image-wrap">
              <Image
                className="final-image"
                src="/images/gazkas-service/after-result.svg"
                alt="Результат после покоса травы техникой GAZKAS"
                width={1600}
                height={1000}
              />
            </div>
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
