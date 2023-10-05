import { Container } from "../../components/container";
import { LayoutBlock } from "../../components/layout-block";
import { Card } from "./card";

const config = [
  {
    title: "Построение\nхранилища данных",
    description:
      "Реализация проектов построения корпоративных хранилищ (data warehouse) и хранилищ big data на основе российского mdm/etl решения combyx, а так же с использованием open source технологий",
    icon: "/services/image-1.png",
  },
  {
    title: "Внедрение бизнес-аналитики\nи корпоративной отчетности",
    description:
      "Реализация комплексных проектов и решение локальных задач внедрение и развития корпоративной бизнес-аналитики, от ceo дашборда до операционных показателей любых бизнес-направлений фарм-компаний. разрабатываем методологию анализа бизнес и операционных показателей, консолидируем сырые данные, преобразуем и повышаем качество данных, создаем удобные и понятные дашборды, внедряем bi-системы, подходящие вашему бизнесу",
    icon: "/services/image-2.png",
  },
  {
    title: "ИТ консалтинг",
    description:
      "Поможем понять, какие изменения в ит нужны компании уже сейчас, и как их реализовать. проведем аудит процессов и потоков данных. подготовим концепцию корпоративной архитектуры и план трансформации от сегодняшнего дня в целевое состояние.",
    icon: "/services/image-3.png",
  },
  {
    title: "Импортозамещение\nИТ систем",
    description:
      "Поможем с переходом с зарубежной ит-инфраструктуры на отечественное по. выполним сбор требований, подготовим план миграции процессов, выберем подходящее решение из доступных на рынке. подготовим исторические данные для миграции в новую инфраструктуру. проконтролируем качество создаваемых решений чтобы бизнес получил то, что необходимо для развития.",
    icon: "/services/image-4.png",
  },
  {
    title: "Заказная\nразработка по",
    description:
      "С нуля создаем программные продукты под задачи бизнеса. модернизируем работающие ит-решения для поддержки уникальных процессов вашей компании. помогаем на всем пути – от поиска идей и проектирования до внедрения и развития системы.",
    icon: "/services/image-5.svg",
  },
  {
    title: "Автоматизация процессов\nвзаимодействия с hcp",
    description:
      "Выстраиваем правильные процессы коммуникации с hcp от сбора персональных данных в соответствии с 152 фз до планирования визитов медицинских представителей. автоматизируем дистанционные и очные коммуникации по всем каналам с помощью единой cdp virm",
    icon: "/services/image-6.png",
  },
];

export const Services = () => {
  return (
    <LayoutBlock
      id="services"
      className="bg-gradient-to-b from-[#6733e2] to-violet-800 py-16 lg:py-20">
      <Container>
        <div className="text-xl lg:text-3xl mb-24 text-white font-bold text-center">
          Мы понимаем фармацевтический бизнес и проблемы, говорим на одном языке и предлагаем лучший
          сервис и надежные ИТ-решения
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-16 gap-x-8">
          {config.map((item) => (
            <Card key={item.icon} {...item} />
          ))}
        </div>
      </Container>
    </LayoutBlock>
  );
};