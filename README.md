# Trip.Maunya.My.Id - Website Jasa Trip Travel

Website statis untuk layanan jasa trip travel dengan fitur lengkap dan responsif.

## Fitur Utama

- **Hero Section** dengan animasi dan gambar backdrop
- **Pencarian Trip** dengan filter destinasi, tanggal, dan durasi
- **Paket Trip** dengan detail harga, rating, dan booking
- **Destinasi Populer** dengan galeri interaktif
- **Form Booking** dengan validasi dan modal
- **Form Kontak** dengan validasi
- **Newsletter** subscription
- **Responsive Design** untuk mobile dan desktop
- **Smooth Animations** dan transisi
- **Dark Mode Ready** (opsional)

## Teknologi yang Digunakan

- **HTML5** - Struktur semantik
- **Tailwind CSS** - Styling modern dan responsif
- **jQuery 3.7+** - Interaktivitas dan DOM manipulation
- **Font Awesome** - Icons
- **Google Images** - Background images (via Unsplash URLs)

## Struktur Folder

```
trip.maunya.my.id/
├── index.html          # Halaman utama
├── css/
│   └── style.css       # Custom CSS dan animations
├── js/
│   └── script.js       # JavaScript functionality
├── images/            # Folder untuk gambar lokal
└── assets/            # Asset tambahan jika diperlukan
```

## Cara Menggunakan

1. Buka file `index.html` di browser
2. Ataujalankan dengan live server untuk development:
   ```bash
   # Jika menggunakan Python
   python -m http.server 8000
   
   # Jika menggunakan Node.js
   npx serve .
   
   # Jika menggunakan PHP
   php -S localhost:8000
   ```

## Fitur Interaktif

### Navigation
- Mobile menu toggle
- Smooth scrolling antar section
- Sticky navbar dengan efek scroll
- Active link styling

### Search & Filter
- Real-time search
- Filter by duration
- Auto-complete suggestions

### Booking System
- Modal popup untuk booking
- Form validation
- Loading states
- Success notifications

### Animations
- Fade in effects pada scroll
- Counter animation untuk statistik
- Hover effects pada cards
- Parallax scrolling pada hero

### Forms
- Email validation
- Phone validation
- Required field validation
- Real-time error feedback

## Customization

### Mengubah Warna Tema
Edit CSS variables atau warna langsung di `css/style.css`:

```css
:root {
    --primary-color: #3B82F6;
    --secondary-color: #8B5CF6;
    --accent-color: #10B981;
}
```

### Menambah Paket Trip
Edit section `<section id="packages">` di `index.html`:

```html
<div class="package-card bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Copy existing package structure -->
</div>
```

### Menambah Destinasi
Edit section `<section id="destinations">` di `index.html`:

```html
<div class="destination-card group relative overflow-hidden rounded-xl cursor-pointer">
    <!-- Copy existing destination structure -->
</div>
```

## Browser Compatibility

Website ini kompatibel dengan:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari/iOS 14+
- ✅ Chrome Mobile

## Performance Optimization

- Use CDN untuk jQuery dan Font Awesome
- Lazy loading images
- Minified CSS/JS (untuk production)
- Optimized animations dengan CSS transforms

## Deployment

### Static Hosting
Deploy ke platform hosting statis:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

### Custom Domain
Hubungkan domain Anda dengan:
1. Point DNS A record ke IP hosting
2. Upload files ke root directory
3. Update `index.html` dengan domain Anda

## Support & Maintenance

### Troubleshooting
- Pastikan jQuery loaded sebelum script.js
- Check console untuk JavaScript errors  
- Validate HTML dengan W3C validator
- Test responsivity dengan Chrome DevTools

### Updates
- Update package prices dan availability
- Add new package destination
- Update contact information
- Add customer testimonials

## License

Project ini dibuat untuk demonstrasi dan dapat digunakan bebas.

---

**Created with ❤️ using HTML, Tailwind CSS, and jQuery for Trip.Maunya.My.Id**
