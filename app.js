/**
 * TS GROUP - SEAL OFFICE 2026: ARCHITECTURAL MOODBOARD APP
 * Interactive Controller for Floorplan, Swatch Inspector, Presentation & Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// Comprehensive Material Database with An Cường & Architectural Standards
const MATERIAL_DATABASE = {
  'oak': {
    name: 'Gỗ Sồi Tự Nhiên An Cường (Natural Oak Veneer)',
    brand: 'An Cường Wood Working - Mã hiệu: MFC/MDF Oak M4021',
    finish: 'Bề mặt sần gỗ sâu sồi tự nhiên (Natural Wood Grain Finish), chống trầy AC3',
    thickness: '18mm / 25mm lõi xanh chống ẩm HMR E1',
    acoustic: 'Hấp thụ âm thanh tiêu chuẩn NRC 0.45',
    application: 'Ốp vách lam tiêu âm, cửa trượt lùa phòng sếp, kệ mẫu trưng bày',
    spec: 'Khả năng chống cong vênh, chống trầy xước bề mặt cao, tiêu chuẩn khí thải E1 an toàn sức khỏe Gen Z.'
  },
  'light-concrete': {
    name: 'Bê Tông Xước Mài Sàn & Vách (Polished Light Concrete)',
    brand: 'Novacolor Architectural Cement / Bê tông mài Terrazzo',
    finish: 'Mài bóng mờ Silk-matte phủ sealer chống bám bẩn nano',
    thickness: 'Độ dày hoàn thiện 3mm Microcement / 50mm bê tông nền',
    acoustic: 'Chống mài mòn Class 4, chống trơn trượt R10',
    application: 'Sàn lối đi trung tâm, vách chuyển tiếp, sảnh tầng thang máy',
    spec: 'Màu xám xi măng nhạt kiến trúc, vân loang mộc mạc tối giản tạo cảm giác rộng mở và hiện đại.'
  },
  'dark-concrete': {
    name: 'Bê Tông Đen Anthracite (Raw Dark Concrete)',
    brand: 'Kovara Architectural Concrete - Mã hiệu C9011 Dark Slate',
    finish: 'Mài thô sần nhẹ bề mặt Troweled Finish',
    thickness: 'Vách ốp trang trí 15mm tấm sợi khoáng xi măng',
    acoustic: 'Chống cháy Class A1 không bắt lửa',
    application: 'Vách nền sau logo SEAL, trần mở kỹ thuật, cột kết cấu sảnh',
    spec: 'Tông màu đen than chì cá tính, tạo chiều sâu thị giác và độ tương phản mạnh mẽ với màu vàng thương hiệu.'
  },
  'black-metal': {
    name: 'Thép Sơn Tĩnh Điện Đen Nhám (Matte Black Powdercoat)',
    brand: 'Hệ nhôm kính Xingfa / Khung thép Hòa Phát tiêu chuẩn',
    finish: 'Sơn tĩnh điện hạt cát sần Tiger Drylac RAL 9005',
    thickness: 'Thép hộp định hình 1.8mm - 2.5mm',
    acoustic: 'Kết cấu chịu tải trọng cao, chống rung chấn',
    application: 'Khung vách kính ngăn, chân bàn cụm nhân viên, giá treo pantry',
    spec: 'Bề mặt lì không phản xạ chói sáng, đường nét thanh mảnh sắc sảo mang phong cách kiến trúc công nghiệp hiện đại.'
  },
  'cork': {
    name: 'Tấm Bần Tiêu Âm Tự Nhiên (Natural Acoustic Cork Sheet)',
    brand: 'Amorim Cork Acoustics - Tiêu chuẩn Bồ Đào Nha',
    finish: 'Bề mặt hạt bần ép tự nhiên, xử lý chống ẩm mốc',
    thickness: '6mm dán vách kết hợp nỉ',
    acoustic: 'Hệ số tiêu âm vượt trội NRC 0.65',
    application: 'Bảng ghim ý tưởng Creative Space, vách phòng họp nhỏ, bọc góc làm việc',
    spec: 'Vật liệu xanh bền vững 100% sinh thái, tiêu âm giọng nói và tạo bề mặt tương tác trực quan cho ý tưởng sáng tạo.'
  },
  'herringbone': {
    name: 'Gạch Thẻ Xương Cá Trắng Mờ (White Chevron Ceramic)',
    brand: 'Eurotile / Viglacera Porcelain Series',
    finish: 'Men mờ Satin sần nhẹ chống bám vân tay, ron epoxy xám nhạt',
    thickness: 'Gạch thẻ 75x300mm dày 8mm',
    acoustic: 'Chống thấm nước 0.1%, chống hóa chất tẩy rửa',
    application: 'Vách ốp backsplash pantry, lối vào bên phải sảnh đón, vách khu vệ sinh',
    spec: 'Kiểu xếp xương cá zig-zag truyền thống được tái hiện với tinh thần đương đại trẻ trung, khúc xạ ánh sáng đa chiều.'
  },
  'terrazzo': {
    name: 'Đá Mài Terrazzo Hạt Tự Nhiên (Multi-aggregate Terrazzo)',
    brand: 'Bảo Lai Stone / Terrazzo Ý cao cấp',
    finish: 'Mài bóng satin Honed Finish, cốt đá thạch anh & sỏi cẩm thạch',
    thickness: '20mm tấm đúc sẵn / đổ tại chỗ',
    acoustic: 'Chịu lực nén > 80 MPa, chống mài mòn tuyệt đối',
    application: 'Mặt bàn đảo quầy bar pantry, sàn sảnh lễ tân, bậc giật cấp',
    spec: 'Sự pha trộn ngẫu hứng của hạt đá cẩm thạch trắng, sỏi đen và vụn gạch nung trên nền xi măng xám nhạt tinh tế.'
  },
  'yellow-seal': {
    name: 'Vàng Nhận Diện SEAL (Vibrant Neon Accent Yellow)',
    brand: 'Sơn phủ hoàn thiện Jotun / Dulux Ambiance - Mã RAL 1023',
    finish: 'Sơn bả mịn cao cấp mờ Eggshell Finish',
    thickness: '3 lớp sơn phủ bảo vệ màu',
    acoustic: 'Sơn nhẹ mùi, hàm lượng VOC cực thấp an toàn',
    application: 'Dải thảm sàn phân vùng, trần giật cấp Creative Space, dải đèn led line',
    spec: 'Màu vàng tượng trưng cho năng lượng, sự bức phá và bản lĩnh tiên phong của thế hệ Gen Z tại SEAL Office.'
  },
  'denim-blue': {
    name: 'Xanh Jean Denim (Denim Blue / Petrol Navy)',
    brand: 'An Cường Melamine Blue Navy / Vải nỉ Kvadrat',
    finish: 'Bề mặt mịn chống xước / Dệt sợi tự nhiên',
    thickness: 'Tấm ốp vách 9mm / Vải bọc sofa 1.2mm',
    acoustic: 'Hấp thụ tần số âm trung NRC 0.5',
    application: 'Vách nỉ phòng họp lớn, đệm ghế thư giãn, thảm sàn cụm Sales & Art',
    spec: 'Tông màu xanh denim tượng trưng cho chiều sâu tri thức, sự điềm tĩnh và phong thái tự do phóng khoáng.'
  },
  'terracotta': {
    name: 'Gốm Đất Nung & Cam Gạch (Terracotta Rust Warmth)',
    brand: 'Gốm nung Bát Tràng nghệ thuật / Sơn hiệu ứng Conpa Terracotta',
    finish: 'Mộc tự nhiên không tráng men / Bả hiệu ứng cát sa mạc',
    thickness: 'Gạch ốp 15mm / Sơn hiệu ứng 2mm',
    acoustic: 'Điều hòa độ ẩm tự nhiên, tạo cảm xúc ấm cúng',
    application: 'Vòm cong hành lang, ốp chân quầy bar pantry, vách tủ photocopy in ấn',
    spec: 'Mang lại sự cân bằng hoàn hảo giữa tính hiện đại công nghệ và hơi thở ấm áp của đất mẹ tự nhiên.'
  },
  'moss-green': {
    name: 'Xanh Rêu Nhiệt Đới & Cây Xanh (Forest Moss Green & Botany)',
    brand: 'Vườn đứng nội thất & Cây xanh thanh lọc khí thực tế',
    finish: 'Cây trúc quân tử, kim ngân, trầu bà lá xẻ Monstera Deliciosa',
    thickness: 'Chậu composit giấu bồn âm bàn',
    acoustic: 'Tán lá cây giúp tán xạ và hấp thụ tạp âm văn phòng',
    application: 'Lối vào phòng Chủ Tịch lót đá cây trúc, bồn cây đầu bàn cụm MKT',
    spec: 'Thanh lọc formaldehyde, cung cấp oxy tươi và tạo vi khí hậu tươi mát, thư thái cho toàn bộ nhân sự.'
  },
  'walnut': {
    name: 'Gỗ Óc Chó Bắc Mỹ An Cường (American Walnut Executive)',
    brand: 'An Cường Wood - Mã hiệu MFC Walnut Dark W501',
    finish: 'Vân gỗ óc chó tự nhiên vân cuộn sóng sang trọng',
    thickness: '25mm / 36mm mặt bàn giám đốc, tủ tài liệu',
    acoustic: 'Chống ẩm cao, bề mặt phủ Melamine cao cấp',
    application: 'Bàn làm việc quản lý, hệ vách ốp tiêu âm phòng họp cao cấp',
    spec: 'Biểu tượng của sự quyền uy, lịch lãm và thành đạt trường tồn trong kiến trúc văn phòng lãnh đạo.'
  },
  'cognac-leather': {
    name: 'Da Bò Ý Màu Nâu Hổ Phách (Italian Cognac Top-Grain Leather)',
    brand: 'Da thuộc Mastrotto Ý cao cấp',
    finish: 'Thuộc thảo mộc tự nhiên Aniline mềm mại, giữ nguyên vân lỗ chân lông',
    thickness: '1.4 - 1.6mm',
    acoustic: 'Độ đàn hồi cao, thoáng khí, bền đẹp theo thời gian',
    application: 'Sofa tiếp khách phòng Chủ tịch, ghế quầy bar pantry, ghế lãnh đạo',
    spec: 'Màu nâu Cognac càng dùng càng bóng đẹp và lên nước tự nhiên, tôn vinh đẳng cấp không gian.'
  },
  'smoked-glass': {
    name: 'Kính Màu Xám Khói Cường Lực (Smoked Grey Tempered Glass)',
    brand: 'Kính an toàn Viglacera Solar Control',
    finish: 'Tôi nhiệt an toàn 10mm - 12mm mài xiết cạnh bóng',
    thickness: '10mm vách ngăn / 12mm cửa trượt',
    acoustic: 'Cách âm STC 36 dB, kiểm soát nhiệt và chói',
    application: 'Vách ngăn phân khu MKT-Art, vách phòng họp 20 pax, vách sảnh đón',
    spec: 'Tạo độ mờ ảo thị giác vừa đủ để giữ sự riêng tư nhưng không ngăn cản tầm nhìn và ánh sáng xuyên suốt.'
  }
};

// Subtle Web Audio Click Synthesizer for tactile feedback
function playSoftClick() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (e) {
    // Audio context not allowed or not supported
  }
}

// Master App Initialization
function initApp() {
  restructureMoodboards();
  setupFilterTabs();
  setupFloorplanHotspots();
  setupMaterialInspector();
  setupLightbox();
  setupPresentationMode();
  setupPrintExport();
}

const ZONE_STORY_MAP = {
  lobby: 'Sảnh chính mở ra bằng không gian đón ánh sáng và nhịp gỗ sồi ấm áp, giúp mọi khách đến đều cảm nhận ngay sự chuyên nghiệp và tinh thần tiên phong của thương hiệu. Cửa xoay pivot cùng trần vòm dẫn ánh dài tạo trải nghiệm bước vào như một lời chào chính thức và có tính nhấn mạnh thương hiệu.',
  reception: 'Lễ tân được xây dựng như một tác phẩm nghệ thuật công sở, nơi đá đen điêu khắc và vách gạch kính làm nền cho phong cách đón tiếp hiện đại, tinh tế và mạnh mẽ. Không gian này vừa mang tính khách quan vừa tạo cảm giác thân thiện, giúp đối tác cảm thấy được chào đón ngay từ phút đầu.',
  boardroom: 'Phòng họp lớn 20 pax là nơi những quyết định chiến lược được hình thành, nên việc ưu tiên ánh sáng, âm thanh và chất liệu sang trọng là cực kỳ quan trọng. Màu xanh denim và gỗ óc chó tạo cảm giác tin cậy, trong khi sự xa hoa của vách kính và đèn trần bền vững nâng tầm đẳng cấp doanh nghiệp.',
  central: 'Khối làm việc trung tâm là nhịp đập năng lượng của văn phòng, nơi sự chuyên nghiệp được kết hợp với tinh thần sáng tạo và tính cộng tác cao. Sàn phân vùng màu vàng - xám - xanh cùng hệ cây xanh giúp không gian vừa khoa học, vừa sống động, khuyến khích đội ngũ tạo ra những ý tưởng mới mỗi ngày.',
  creative: 'Creative Space không chỉ là nơi làm việc mà là nơi khơi gợi sự bùng nổ của ý tưởng, brainstorming và thử nghiệm. Vách viết trắng, vật liệu mềm và đèn trung tính giúp không gian giữ được sự thăng hoa nhưng vẫn kiểm soát được sự tập trung và hiệu quả làm việc.',
  management: 'Các phòng quản lý mang tiêu chuẩn riêng tư, quyền lực và sự yên tĩnh để ra quyết định. Gỗ tự nhiên, kính trong và ánh sáng ấm tạo môi trường chuyên nghiệp nhưng vẫn gần gũi, phù hợp với phong cách lãnh đạo hiện đại, hiệu quả và không bạo lực.',
  smallmeeting: 'Phòng họp nhỏ 4 người được thiết kế cho các cuộc trao đổi nhanh, call online và thảo luận nội bộ với mức độ tập trung cao. Sự lựa chọn vật liệu tiêu âm và mặt kính có độ trong vừa đủ tạo cảm giác kín đáo, nghiêm túc nhưng không làm mất sự mở và linh hoạt.',
  pantry: 'Pantry và quầy bar chill là nơi team tụ họp, nghỉ ngắn, và xây dựng sự kết nối giữa các bộ phận. Màu warm terracotta và view kính rộng mở khiến không gian trở thành điểm “reset cảm xúc”, nơi tinh thần làm việc được nạp lại năng lượng mới.',
  print: 'Khu in ấn và tủ mẫu vật liệu là bộ phận kỹ thuật mang tính hỗ trợ, nhưng lại là nơi ghi nhận giá trị thực tế và độ tỉ mỉ của dự án. Không gian này giúp quá trình triển khai và kiểm tra vật liệu diễn ra rõ ràng, hiệu quả và chuyên nghiệp hơn rất nhiều.'
};

function restructureMoodboards() {
  const cards = document.querySelectorAll('.moodboard-card');

  cards.forEach((card) => {
    const zone = card.id.replace(/^mb-/, '');
    if (card.querySelector('.layout-visual')) return;

    const canvas = card.querySelector('.mb-main-canvas');
    if (!canvas) return;

    const materialBoard = canvas.querySelector('.material-board-frame');
    const perspectives = canvas.querySelector('.spatial-perspectives-frame');
    const title = card.querySelector('.mb-title-wrap h3')?.textContent?.trim() || 'Khu vực thiết kế';
    const zoneNumber = card.querySelector('.mb-badge-number')?.textContent?.trim() || '01';
    const designFocus = card.querySelector('.mb-header-meta .mb-meta-item:last-child .mb-meta-val')?.textContent?.trim() || 'Điểm nhấn không gian';
    const storyText = ZONE_STORY_MAP[zone] || 'Không gian này được thiết kế để tạo nên trải nghiệm làm việc chuyên nghiệp, hiện đại và có tính thương hiệu rõ ràng nhất.';

    const layoutVisual = document.createElement('div');
    layoutVisual.className = 'layout-visual';
    layoutVisual.innerHTML = `
      <div class="layout-visual-frame">
        <img src="Moodboard/layout.jpg" alt="${title}">
        <div class="layout-zone-overlay">
          <span class="layout-zone-badge">${zoneNumber}</span>
          <strong>${title}</strong>
        </div>
      </div>
      <div class="layout-caption">
        <span>Layout khu vực</span>
        <p>${designFocus}</p>
      </div>
    `;

    const rightStack = document.createElement('div');
    rightStack.className = 'mb-right-stack';

    if (materialBoard) rightStack.appendChild(materialBoard);
    if (perspectives) rightStack.appendChild(perspectives);

    canvas.innerHTML = '';
    canvas.appendChild(layoutVisual);
    canvas.appendChild(rightStack);

    const storyPanel = document.createElement('div');
    storyPanel.className = 'mb-story-panel';
    storyPanel.innerHTML = `
      <div class="story-panel-header">
        <span class="story-panel-tag">Câu chuyện</span>
        <h4>${title}</h4>
      </div>
      <p>${storyText}</p>
    `;

    card.appendChild(storyPanel);
  });
}

// Filter Tabs Handling
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.nav-tab-btn, .filter-pill');
  const cards = document.querySelectorAll('.moodboard-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      playSoftClick();
      const targetFilter = tab.getAttribute('data-filter') || 'all';

      // Update active states
      tabs.forEach(t => {
        if (t.getAttribute('data-filter') === targetFilter) {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });

      // Filter cards with smooth fade
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (targetFilter === 'all' || category === targetFilter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Floorplan Hotspots & Sidebar Sync
function setupFloorplanHotspots() {
  const pins = document.querySelectorAll('.fp-pin, .fp-zone');
  const listBtns = document.querySelectorAll('.zone-item-btn');
  const previewBox = document.getElementById('fp-selected-preview');

  function selectZone(zoneId) {
    playSoftClick();
    // Update active in list
    listBtns.forEach(btn => {
      if (btn.getAttribute('data-zone') === zoneId) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Preview Box Data
    const activeBtn = document.querySelector(`.zone-item-btn[data-zone="${zoneId}"]`);
    if (activeBtn && previewBox) {
      const name = activeBtn.querySelector('.zone-name').textContent;
      const leader = activeBtn.querySelector('.zone-leader').textContent;
      const desc = activeBtn.getAttribute('data-desc') || 'Khu vực chức năng quan trọng của văn phòng SEAL 2026.';
      const num = activeBtn.querySelector('.zone-num').textContent;

      previewBox.innerHTML = `
        <div class="fp-preview-header">
          <h5 class="fp-preview-title">${num}. ${name}</h5>
          <span class="fp-preview-tag">${leader}</span>
        </div>
        <p class="fp-preview-desc">${desc}</p>
        <button class="fp-jump-btn" onclick="scrollToMoodboard('${zoneId}')">
          Xem Moodboard Chi Tiết &rarr;
        </button>
      `;
    }
  }

  pins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      const zoneId = pin.getAttribute('data-zone');
      if (zoneId) selectZone(zoneId);
    });
  });

  listBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const zoneId = btn.getAttribute('data-zone');
      if (zoneId) selectZone(zoneId);
    });
  });
}

// Scroll to specific moodboard
window.scrollToMoodboard = function (zoneId) {
  playSoftClick();
  const card = document.getElementById(`mb-${zoneId}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    card.style.boxShadow = '0 0 0 3px #f6c820, 0 30px 60px rgba(0,0,0,0.15)';
    setTimeout(() => {
      card.style.boxShadow = '';
    }, 2000);
  }
};

// Material Swatch Inspector Modal
function setupMaterialInspector() {
  const modal = document.getElementById('material-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const swatches = document.querySelectorAll('.material-slab, .color-chip, .callout-label');

  if (!modal) return;

  function openInspector(key) {
    playSoftClick();
    const data = MATERIAL_DATABASE[key] || MATERIAL_DATABASE['oak'];

    document.getElementById('modal-mat-title').textContent = data.name;
    document.getElementById('modal-mat-brand').textContent = data.brand;
    document.getElementById('modal-mat-finish').textContent = data.finish;
    document.getElementById('modal-mat-thick').textContent = data.thickness;
    document.getElementById('modal-mat-acoustic').textContent = data.acoustic;
    document.getElementById('modal-mat-app').textContent = data.application;
    document.getElementById('modal-mat-desc').textContent = data.spec;

    // Apply visual preview style to modal swatch box
    const swatchBox = document.getElementById('modal-swatch-box');
    swatchBox.className = 'modal-swatch-large';
    if (key.includes('concrete')) {
      swatchBox.classList.add(key.includes('dark') ? 'slab-dark-concrete' : 'slab-light-concrete');
    } else if (key.includes('oak')) {
      swatchBox.classList.add('slab-natural-oak');
    } else if (key.includes('herringbone')) {
      swatchBox.classList.add('slab-herringbone');
    } else if (key.includes('terrazzo')) {
      swatchBox.classList.add('slab-terrazzo');
    } else if (key.includes('cork')) {
      swatchBox.classList.add('slab-cork');
    } else if (key.includes('metal')) {
      swatchBox.classList.add('slab-black-metal');
    } else if (key.includes('denim')) {
      swatchBox.classList.add('slab-denim-blue');
    } else if (key.includes('yellow')) {
      swatchBox.classList.add('slab-mustard-yellow');
    } else if (key.includes('terracotta')) {
      swatchBox.classList.add('slab-terracotta');
    } else if (key.includes('moss')) {
      swatchBox.classList.add('slab-moss-green');
    } else if (key.includes('leather')) {
      swatchBox.classList.add('slab-cognac-leather');
    } else if (key.includes('glass')) {
      swatchBox.classList.add('slab-smoked-glass');
    } else {
      swatchBox.classList.add('slab-natural-oak');
    }

    modal.classList.add('open');
  }

  swatches.forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = swatch.getAttribute('data-mat') || 'oak';
      openInspector(key);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });
}

// Lightbox for Perspective Renders
function setupLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const lbImg = document.getElementById('lightbox-img');
  const cards = document.querySelectorAll('.perspective-photo-card');

  if (!lightbox || !lbImg) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      playSoftClick();
      const img = card.querySelector('img');
      if (img) {
        lbImg.src = img.src;
        lightbox.classList.add('open');
      }
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      lightbox.classList.remove('open');
    }
  });
}

// Fullscreen Presentation Mode
function setupPresentationMode() {
  const openBtn = document.getElementById('btn-presentation-mode');
  const overlay = document.getElementById('presentation-overlay');
  const closeBtn = document.getElementById('pres-close-btn');
  const stage = document.getElementById('pres-stage');
  const prevBtn = document.getElementById('pres-prev-btn');
  const nextBtn = document.getElementById('pres-next-btn');
  const counter = document.getElementById('pres-counter');

  if (!openBtn || !overlay) return;

  const allCards = Array.from(document.querySelectorAll('.moodboard-card'));
  let currentIndex = 0;

  function renderSlide(index) {
    if (index < 0) index = allCards.length - 1;
    if (index >= allCards.length) index = 0;
    currentIndex = index;

    stage.innerHTML = '';
    const clone = allCards[currentIndex].cloneNode(true);
    clone.id = `pres-clone-${currentIndex}`;
    clone.style.display = 'block';
    clone.style.opacity = '1';
    clone.style.transform = 'none';

    // Reattach inspector listeners to clone
    const cloneSwatches = clone.querySelectorAll('.material-slab, .color-chip, .callout-label');
    cloneSwatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = swatch.getAttribute('data-mat') || 'oak';
        const modal = document.getElementById('material-modal');
        if (modal) {
          modal.classList.add('open');
        }
      });
    });

    stage.appendChild(clone);
    counter.textContent = `${currentIndex + 1} / ${allCards.length}`;
  }

  openBtn.addEventListener('click', () => {
    playSoftClick();
    overlay.classList.add('open');
    document.body.classList.add('presentation-mode-active');
    renderSlide(0);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('open');
      document.body.classList.remove('presentation-mode-active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      playSoftClick();
      renderSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      playSoftClick();
      renderSlide(currentIndex + 1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
      renderSlide(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      renderSlide(currentIndex - 1);
    } else if (e.key === 'Escape') {
      overlay.classList.remove('open');
      document.body.classList.remove('presentation-mode-active');
    }
  });
}

// Print / Export PDF Handler
function setupPrintExport() {
  const printBtn = document.getElementById('btn-print-export');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      playSoftClick();
      // Ensure all cards are visible for print
      document.querySelectorAll('.moodboard-card').forEach(c => {
        c.style.display = 'block';
        c.style.opacity = '1';
      });
      window.print();
    });
  }
}
