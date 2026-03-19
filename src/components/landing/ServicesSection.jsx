import { motion } from "framer-motion";

const WebAppIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="10" fill="#5A57FF"/>
        <svg x="4" y="4" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M16.3454 11.7891C16.5702 11.1815 17.4298 11.1815 17.6546 11.7891L18.6625 14.5128C18.8038 14.8949 19.1052 15.1962 19.4872 15.3376L22.2109 16.3454C22.8185 16.5702 22.8185 17.4299 22.2109 17.6547L19.4872 18.6625C19.1052 18.8039 18.8038 19.1052 18.6625 19.4873L17.6546 22.211C17.4298 22.8186 16.5702 22.8186 16.3454 22.211L15.3375 19.4873C15.1962 19.1052 14.8948 18.8039 14.5128 18.6625L11.7891 17.6547C11.1814 17.4299 11.1814 16.5702 11.7891 16.3454L14.5128 15.3376C14.8948 15.1962 15.1962 14.8949 15.3375 14.5128L16.3454 11.7891Z" stroke="white" strokeWidth="1.5"/>
            <path d="M17 31.1667C24.824 31.1667 31.1667 24.8241 31.1667 17C31.1667 9.17601 24.824 2.83337 17 2.83337C9.17596 2.83337 2.83333 9.17601 2.83333 17C2.83333 24.8241 9.17596 31.1667 17 31.1667Z" stroke="white" strokeWidth="1.5"/>
            <path d="M11.3333 11.3334C12.2871 6.32998 14.4654 2.83337 17 2.83337C19.5346 2.83337 21.7128 6.32998 22.6667 11.3334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.3333 22.6666C12.2871 27.67 14.4654 31.1666 17 31.1666C19.5346 31.1666 21.7128 27.67 22.6667 22.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.83333 17H6.375M31.1667 17H27.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </svg>
);

const MobileAppIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="10" fill="#5A57FF"/>
        <path d="M12.5 11.0833C12.5 10.3319 12.7985 9.61122 13.3299 9.07986C13.8612 8.54851 14.5819 8.25 15.3333 8.25H26.6667C27.4181 8.25 28.1388 8.54851 28.6701 9.07986C29.2015 9.61122 29.5 10.3319 29.5 11.0833V30.9167C29.5 31.6681 29.2015 32.3888 28.6701 32.9201C28.1388 33.4515 27.4181 33.75 26.6667 33.75H15.3333C14.5819 33.75 13.8612 33.4515 13.3299 32.9201C12.7985 32.3888 12.5 31.6681 12.5 30.9167V11.0833Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5833 9.66663H22.4166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 28.0834V28.0975" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const EnterpriseIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="10" fill="#5A57FF"/>
        <path d="M30.5625 37C32.535 37 34.4268 36.2164 35.8216 34.8216C37.2164 33.4268 38 31.535 38 29.5625C38 27.59 37.2164 25.6982 35.8216 24.3034C34.4268 22.9086 32.535 22.125 30.5625 22.125C28.59 22.125 26.6982 22.9086 25.3034 24.3034C23.9086 25.6982 23.125 27.59 23.125 29.5625C23.125 31.535 23.9086 33.4268 25.3034 34.8216C26.6982 36.2164 28.59 37 30.5625 37ZM34.1304 27.4524L31.2935 32.1826C31.1688 32.3904 30.9984 32.5671 30.7952 32.6991C30.592 32.8312 30.3614 32.9152 30.1208 32.9447C29.8803 32.9742 29.6362 32.9484 29.4071 32.8694C29.178 32.7904 28.9699 32.6602 28.7987 32.4886L27.154 30.846C26.9545 30.6465 26.8424 30.3759 26.8424 30.0938C26.8424 29.8116 26.9545 29.541 27.154 29.3415C27.3535 29.142 27.6241 29.0299 27.9062 29.0299C28.1884 29.0299 28.459 29.142 28.6585 29.3415L29.8209 30.506L32.3071 26.3601C32.3788 26.2404 32.4734 26.136 32.5855 26.0528C32.6976 25.9697 32.8249 25.9094 32.9603 25.8755C33.0957 25.8415 33.2364 25.8346 33.3744 25.855C33.5125 25.8755 33.6452 25.9229 33.7649 25.9946C33.8846 26.0663 33.989 26.1609 34.0722 26.273C34.1553 26.3851 34.2156 26.5124 34.2495 26.6478C34.2835 26.7832 34.2904 26.9239 34.27 27.0619C34.2495 27.2 34.2021 27.3327 34.1304 27.4524Z" fill="white"/>
        <path d="M29.704 16.2239C30.3816 15.9201 31.0254 15.5462 31.625 15.1082V17.875C31.625 18.4891 31.1724 19.2647 30.0249 20.0149C31.2895 19.9435 32.5557 20.1241 33.75 20.5461V11.5C33.75 9.36013 31.8906 7.77062 29.704 6.77612C27.4217 5.73912 24.3426 5.125 21 5.125C17.6574 5.125 14.5782 5.73912 12.296 6.77612C10.1094 7.77062 8.25 9.36013 8.25 11.5V30.625C8.25 32.7649 10.1094 34.3544 12.296 35.3489C14.5782 36.3837 17.6574 37 21 37C22.139 37 23.2483 36.9277 24.3044 36.7939C23.6408 36.2196 23.0595 35.5568 22.5767 34.824C22.0611 34.858 21.5355 34.875 21 34.875C17.889 34.875 15.1222 34.3012 13.1757 33.4151C11.1315 32.4844 10.375 31.4176 10.375 30.625V27.8582C10.9509 28.2875 11.6075 28.6615 12.296 28.9739C14.5782 30.0087 17.6574 30.625 21 30.625H21.0574C20.9802 29.9188 20.9802 29.2062 21.0574 28.5H21C17.889 28.5 15.1222 27.9262 13.1757 27.0401C11.1315 26.1094 10.375 25.0426 10.375 24.25V21.4832C10.9509 21.9125 11.6075 22.2865 12.296 22.5989C14.5782 23.6337 17.6574 24.25 21 24.25C21.5568 24.25 22.105 24.233 22.6448 24.199C23.2774 23.2653 24.0702 22.451 24.9865 21.7935C23.7583 22.006 22.4152 22.125 21 22.125C17.889 22.125 15.1222 21.5512 13.1757 20.6651C11.1315 19.7344 10.375 18.6676 10.375 17.875V15.1082C10.9509 15.5375 11.6075 15.9115 12.296 16.2239C14.5782 17.2609 17.6574 17.875 21 17.875C24.3426 17.875 27.4217 17.2609 29.704 16.2239ZM10.375 11.5C10.375 10.7052 11.1315 9.64062 13.1757 8.70988C15.1222 7.82588 17.889 7.25 21 7.25C24.111 7.25 26.8778 7.82375 28.8243 8.70988C30.8685 9.64062 31.625 10.7074 31.625 11.5C31.625 12.2948 30.8685 13.3594 28.8243 14.2901C26.8778 15.1741 24.111 15.75 21 15.75C17.889 15.75 15.1222 15.1763 13.1757 14.2901C11.1315 13.3594 10.375 12.2926 10.375 11.5Z" fill="white"/>
    </svg>
);

const CloudIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="10" fill="#5A57FF"/>
        <path d="M13.4307 29.5C9.78708 29.5 6.83333 26.6567 6.83333 23.1491C6.83333 19.6428 9.78708 16.7996 13.4307 16.7996C13.9875 14.3034 15.9722 12.2662 18.637 11.4545C21.3003 10.6442 24.2413 11.1811 26.3493 12.8712C28.4573 14.557 29.4122 17.1311 28.8568 19.6272H30.2593C32.9694 19.6272 35.1667 21.8372 35.1667 24.5657C35.1667 27.2957 32.9694 29.5057 30.2579 29.5057H13.4307" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SecurityIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="10" fill="#5A57FF"/>
        <svg x="4" y="4" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M12.75 18.4167C12.75 18.4167 14.1667 18.4167 15.5833 21.25C15.5833 21.25 20.0834 14.1667 24.0833 12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.75 15.843V11.7305C29.75 9.40712 29.75 8.24544 29.1775 7.48753C28.605 6.72962 27.3106 6.36167 24.7218 5.62577C22.9531 5.12299 21.3939 4.51727 20.1483 3.96428C18.4498 3.21035 17.6007 2.83337 17 2.83337C16.3993 2.83337 15.5502 3.21035 13.8518 3.96428C12.6061 4.51727 11.0469 5.12298 9.27822 5.62577C6.6894 6.36167 5.39498 6.72962 4.82249 7.48753C4.25 8.24544 4.25 9.40712 4.25 11.7305V15.843C4.25 23.8121 11.4223 28.5933 15.0082 30.4859C15.8682 30.9398 16.2982 31.1667 17 31.1667C17.7018 31.1667 18.1318 30.9398 18.9918 30.4859C22.5777 28.5933 29.75 23.8121 29.75 15.843Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    </svg>
);

const DataAnalyticsIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="10" fill="#5A57FF"/>
        <path d="M8.25 8.25V30.9167C8.25 31.6681 8.54851 32.3888 9.07986 32.9201C9.61122 33.4515 10.3319 33.75 11.0833 33.75H33.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.9167 26.6667C14.625 23.8334 16.0417 16.75 19.5834 16.75C22.4167 16.75 22.4167 21 25.25 21C28.7917 21 31.625 13.9167 32.3334 11.0834" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const services = [
    {
        icon: WebAppIcon,
        title: "Web Applications",
        description: "Custom web platforms and dashboards built with modern technologies like React, Next.js, and Node."
    },
    {
        icon: MobileAppIcon,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android that your users will love."
    },
    {
        icon: EnterpriseIcon,
        title: "Enterprise Systems",
        description: "ERP, CRM, and business management systems tailored to your workflows and processes."
    },
    {
        icon: CloudIcon,
        title: "Cloud & DevOps",
        description: "Cloud infrastructure, CI/CD pipelines, and scalable architecture to keep your systems running smoothly."
    },
    {
        icon: SecurityIcon,
        title: "Security & Compliance",
        description: "Security audits, data protection strategies, and compliance solutions for regulated industries."
    },
    {
        icon: DataAnalyticsIcon,
        title: "Data & Analytics",
        description: "Business intelligence dashboards, data pipelines, and reporting tools to drive smarter decisions."
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 md:py-28 bg-[#F4F2FF]">
            <div className="max-w-[1440px] mx-auto px-[100px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-bold text-[20px] leading-[24px] text-[#5A57FF] mb-3 block">
                        OUR SERVICES
                    </span>
                    <h2 className="font-extrabold text-[48px] leading-[58px] text-[#0F172A] mb-4">
                        What We{' '}
                        <span className="text-[#5A57FF]">Do</span>
                    </h2>
                    <p className="text-[16px] leading-[19px] text-[#818181] max-w-[525px] mx-auto">
                        Software development services designed to transform your business.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group bg-white border border-[#C2C0FF] rounded-[20px] p-6 hover:shadow-[0_0_8px_10px_rgba(90,87,255,0.15)] transition-all duration-300"
                        >
                            <div className="mb-5">
                                <service.icon />
                            </div>

                            <h3 className="font-semibold text-[24px] leading-[29px] text-[#0F172A] mb-2">
                                {service.title}
                            </h3>

                            <p className="text-[16px] leading-[19px] text-[#818181]">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
