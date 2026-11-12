import { useEffect, useRef, useState } from 'react';
import { GalleryImage } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { FiArrowRight, FiX } from './icons';

interface ProjectGalleryProps {
  images: GalleryImage[];
  title: string;
}

/** Main image + caption + thumbnails, with a full-size view in a native dialog. */
export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = images[index];
  const go = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length);

  useEffect(() => setIndex(0), [images.length, title]);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <figure className="m-0">
      <div className="gallery-frame group">
        <button type="button" onClick={open} className="block w-full h-full" aria-label={t.labels.zoom}>
          <img
            key={current.src}
            src={current.src}
            alt={`${title} : ${current.caption}`}
            loading="lazy"
            className="gallery-img h-full w-full object-contain"
          />
        </button>
        {images.length > 1 && (
          <>
            <button type="button" className="gallery-nav left-3 rotate-180" onClick={() => go(-1)} aria-label="Précédent / Previous">
              <FiArrowRight />
            </button>
            <button type="button" className="gallery-nav right-3" onClick={() => go(1)} aria-label="Suivant / Next">
              <FiArrowRight />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] text-gray-200">
              {index + 1}/{images.length}
            </span>
          </>
        )}
      </div>
      <figcaption className="mt-3 min-h-[3rem] text-sm leading-relaxed text-gray-300">{current.caption}</figcaption>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`gallery-thumb ${i === index ? 'is-active' : ''}`}
              aria-label={img.caption}
              aria-current={i === index}
            >
              <img src={img.src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      <dialog ref={dialogRef} className="lightbox" onClick={(e) => e.target === dialogRef.current && close()}>
        <div className="relative">
          <img src={current.src} alt={`${title} : ${current.caption}`} className="max-h-[78vh] w-auto max-w-full rounded-xl bg-white/5" />
          <p className="mt-3 text-sm text-gray-200">{current.caption}</p>
          <button type="button" onClick={close} className="lightbox-close" aria-label={t.labels.close}>
            <FiX />
          </button>
        </div>
      </dialog>
    </figure>
  );
}
