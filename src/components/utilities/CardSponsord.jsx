import React from 'react';
import iconVisitSponsor from '../../assets/icons/iconVisitSponsor.svg';
import iconSaveProduct from '../../assets/icons/iconSaveProduct.svg';
import previewImageSponsor from '../../assets/images/previewImageSponsor.png';

const CardSponsord = ({ width }) => {
  return (
    <>
    <div className={`w-${width}  m-auto rounded-lg relative`}>
        <img src={previewImageSponsor} alt="Card Image Sponsor" className='img-fluid m-auto p-2' />
        <img src={iconVisitSponsor} alt="Icon Visit Sponsor" className='absolute top-2 right-2 w-[38px] h-[38px]' />
      <div className='flex justify-between items-center pl-3 pr-3'>
        <div>
          <h3 className='sans font-semibold text-[10px] text-[#425466]'>Colorful Shoes</h3>
          <span className='sans font-semibold text-[20px] text-[#27272E'>$399</span>
        </div>
        <div>
          <img src={iconSaveProduct} alt="Icon Save Product" className='w-[25px] h-[28px]' />
        </div>
      </div>
    </div>
    </>
  )
}

export default CardSponsord;