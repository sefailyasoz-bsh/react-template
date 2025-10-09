import DrawerUsage from '@/examples/DrawerUsage';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark-bg flex flex-col">
      <DrawerUsage />
        {/* <div className="bg-brand-white dark:bg-dark-surface shadow-raised rounded-component-md p-space-40">
          <h3 className="text-h5 text-neutral-900 dark:text-dark-text_primary mb-space-24">
            Built with powerful technologies:
          </h3>
          <div className="flex flex-wrap justify-center gap-space-16">
            <div className="flex items-center gap-space-8 px-inline-padding py-atom-padding rounded-full bg-ui_blue-100 text-ui_blue-900 text-body-m-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-space-16 h-space-16">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
              </svg>
              React
            </div>

            <div className="flex items-center gap-space-8 px-inline-padding py-atom-padding rounded-full bg-ui_blue-100 text-ui_blue-900 text-body-m-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-space-16 h-space-16">
                <path d="M5.474 19.982A4.5 4.5 0 0 0 10.435 21a4.5 4.5 0 0 0 4.34-5.454c.486-.067.972-.095 1.46-.095a4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 0-8.914 0 4.502 4.502 0 0 0 1.72 8.783L6.28 17.17a.75.75 0 0 0-.964.007l-.465.341ZM15.75 14.25h-.007a.75.75 0 0 1-.743-.65l-.338-2.251a.75.75 0 0 1 .743-.85h.341c.071 0 .142.003.212.008.258.017.514.043.766.079a4.5 4.5 0 0 0 .548-1.764c.05-.216.075-.436.075-.66a.75.75 0 0 0-.75-.75h-.083a.75.75 0 0 0-.75.75v.393c0 .416-.336.752-.752.752-.415 0-.75-.336-.75-.752V9.75a.75.75 0 0 0-1.5 0v.487c0 1.144.936 2.074 2.073 2.074.75 0 1.428-.39 1.791-.983l.256-.425a.75.75 0 0 0-.464-1.291.75.75 0 0 0-1.291.464l-.256.425a1.5 1.5 0 0 1-.417.653 1.5 1.5 0 0 1-1.077.387c-1.125 0-2.046-.867-2.07-1.996a.75.75 0 0 0-.745-.754h-.007a.75.75 0 0 0-.743.65l-.339 2.251a.75.75 0 0 0 .744.85h.341c.071 0 .142.003.211.008.258.017.514.043.766.079a4.5 4.5 0 0 0 .548-1.764c.05-.216.075-.436.075-.66a.75.75 0 0 0-.75-.75h-.083a.75.75 0 0 0-.75.75v.393c0 .416-.336.752-.752.752-.415 0-.75-.336-.75-.752V9.75a.75.75 0 0 0-1.5 0V9a4.502 4.502 0 0 0-4.34 5.454c-.486.067-.972.095-1.46.095a4.5 4.5 0 0 0-.528-.027 4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 4.417-5.263l.338-2.251a.75.75 0 0 0-.743-.85h-.342c-.071 0-.142-.003-.211-.008-.258-.017-.514-.043-.766-.079a4.5 4.5 0 0 0-.548 1.764c-.05.216-.075.436-.075.66a.75.75 0 0 0 .75.75h.083a.75.75 0 0 0 .75-.75v-.393c0-.416.336-.752.752-.752.415 0 .75.336.75.752V15a.75.75 0 0 0 1.5 0V14.25ZM6.75 12h-.007a.75.75 0 0 1-.743-.65l-.338-2.251a.75.75 0 0 1 .743-.85h.341c.071 0 .142.003.212.008.258.017.514.043.766.079a4.5 4.5 0 0 0 .548-1.764c.05-.216.075-.436.075-.66a.75.75 0 0 0-.75-.75h-.083a.75.75 0 0 0-.75.75v.393c0 .416-.336.752-.752.752-.415 0-.75-.336-.75-.752V7.5a.75.75 0 0 0-1.5 0v.487c0 1.144.936 2.074 2.073 2.074.75 0 1.428-.39 1.791-.983l.256-.425a.75.75 0 0 0-.464-1.291.75.75 0 0 0-1.291.464l-.256.425a1.5 1.5 0 0 1-.417.653 1.5 1.5 0 0 1-1.077.387c-1.125 0-2.046-.867-2.07-1.996a.75.75 0 0 0-.745-.754h-.007a.75.75 0 0 0-.743.65l-.339 2.251a.75.75 0 0 0 .744.85h.341c.071 0 .142.003.211.008-.258-.017-.514-.043-.766-.079a4.5 4.5 0 0 0 .548-1.764c-.05.216-.075-.436-.075-.66a.75.75 0 0 0-.75-.75h-.083a.75.75 0 0 0-.75.75v.393c0 .416-.336.752-.752.752-.415 0-.75-.336-.75-.752V7.5a.75.75 0 0 0-1.5 0V6.75a4.502 4.502 0 0 0-4.34 5.454c-.486.067-.972.095-1.46.095a4.5 4.5 0 0 0-.528-.027 4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 4.417-5.263l.338-2.251a.75.75 0 0 0-.743-.85h-.342c-.071 0-.142-.003-.211-.008-.258-.017-.514-.043-.766-.079a4.5 4.5 0 0 0-.548 1.764c-.05.216-.075.436-.075.66a.75.75 0 0 0 .75.75h.083a.75.75 0 0 0 .75-.75v-.393c0-.416.336-.752.752-.752.415 0 .75.336.75.752V12Z" />
              </svg>
              TypeScript
            </div>

            <div className="flex items-center gap-space-8 px-inline-padding py-atom-padding rounded-full bg-secondary-violet/20 text-secondary-violet text-body-m-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-space-16 h-space-16">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.03 9.47a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
              </svg>
              Redux Toolkit
            </div>

            <div className="flex items-center gap-space-8 px-inline-padding py-atom-padding rounded-full bg-secondary-sunset/20 text-secondary-sunset text-body-m-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-space-16 h-space-16">
                <path d="M16.5 15.75h-3.815a.75.75 0 0 0 0 1.5h3.815a.75.75 0 0 0 0-1.5ZM19.5 12h-3.815a.75.75 0 0 0 0 1.5h3.815a.75.75 0 0 0 0-1.5ZM22.5 8.25H18.75a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5ZM16.826 4.907L9.436 9.412a2.25 2.25 0 0 0-1.12.723L4.474 13.5l-2.008 1.115a.75.75 0 0 0-.348 1.096l2.164 3.906a.75.75 0 0 0 1.096.348l2.008-1.115 3.83-6.903c.595-1.071 1.636-1.636 2.658-1.35.438.118.813.336 1.115.638l7.39-4.505a.75.75 0 0 0-.964-1.246ZM7.768 15.77l.796-.443a2.25 2.25 0 0 1 1.12-.723l7.39-4.505a.75.75 0 0 0-1.096-.348l-7.39 4.505a2.25 2.25 0 0 1-1.12.723l-.796.443Z" />
              </svg>
              React Router
            </div>

            <div className="flex items-center gap-space-8 px-inline-padding py-atom-padding rounded-full bg-ui_green-100 text-ui_green-900 text-body-m-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-space-16 h-space-16">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.85-3.375a.75.75 0 0 0-1.272-.926l-3.365 3.365a.75.75 0 0 0 0 1.06l3.365 3.365a.75.75 0 0 0 1.272-.926L11.516 12l2.584-2.584Z" clipRule="evenodd" />
              </svg>
              Tailwind CSS
            </div>
          </div>
        </div> */}
        
    </div>
  );
};

export default HomePage;