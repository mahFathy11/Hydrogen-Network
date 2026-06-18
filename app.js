const translations = {
    en: {
        excel_title: "Quick Import from Excel",
        excel_desc: "Copy data from Excel (Ctrl+C) and paste it here (Ctrl+V) — Required order:",
        excel_format: "Name | Flow | Impurity% | Pressure bar",
        excel_placeholder: "Paste Excel data here...",
        btn_cancel: "Cancel",
        btn_import: "Import Data",
        meta_title: "Project Details",
        meta_proj_name: "Project Name",
        meta_proj_ph: "e.g. H2 Network Optimization 2024",
        meta_comp_name: "Company / Refinery Name",
        meta_comp_ph: "e.g. Alexandria Petroleum Co.",
        meta_eng_name: "Engineer Name",
        meta_eng_ph: "e.g. Eng. Ahmed",
        meta_notes: "Notes / Conclusions",
        meta_notes_ph: "Write any notes or recommendations...",
        meta_logo: "Company Logo",
        btn_choose_img: "Choose Image",
        btn_delete_logo: "Delete Logo",
        btn_save_data: "Save Details",
        title_tour: "Restart Tour",
        theme_dark: "Dark",
        theme_light: "Light (Industrial)",
        theme_green: "Clean Energy",
        theme_corp: "Corporate",
        title_meta: "Project Details",
        title_new: "New Project",
        title_open: "Open Project (JSON)",
        title_save: "Save Project",
        btn_save: "Save",
        title_print: "Print Report",
        title_pdf: "Export PDF",
        tab_data: "Basic Input",
        tab_config: "Cost Config (OPEX/CAPEX)",
        tab_results: "Results & Feasibility",
        tab_network: "Optimized Network",
        tab_curve: "Composite Curve",
        tab_table: "Cascade Table",
        panel_src: "Sources",
        btn_excel: "Excel",
        btn_add_src: "Add Source",
        th_name: "Name",
        th_flow: "Flow",
        th_imp: "Impurity (%)",
        th_pres: "Pressure (bar)",
        panel_snk: "Sinks (Consumers)",
        btn_add_snk: "Add Sink",
        th_req: "Required",
        th_max_imp: "Max Impurity (%)",
        tt_fresh_imp: "Allowed impurity percentage in the external fresh hydrogen source.",
        lbl_fresh_imp: "Fresh H2 Impurity (%):",
        lbl_compare: "Compare: Membrane vs PSA",
        btn_run: "Run Engineering Analysis",
        panel_comp: "Pressure Constraints & Compressors",
        lbl_en_pres: "Enable pressure constraints and calculate compressor power",
        lbl_comp_eff: "Compressor Efficiency (%)",
        lbl_comp_temp: "Inlet Temperature (K)",
        lbl_elec_cost: "Electricity Cost ($/kWh)",
        panel_pur: "Purification Unit",
        lbl_en_pur: "Enable purification unit to recover H2 from purge gas",
        lbl_pur_tech: "Technology",
        opt_mem: "Membrane",
        opt_psa: "PSA",
        lbl_pur_feed_pres: "Feed Pressure (bar)",
        lbl_pur_feed_flow: "Feed Flow",
        lbl_pur_feed_imp: "Feed Impurity (%)",
        lbl_pur_prod_imp: "Product Impurity (%)",
        lbl_pur_prod_pres: "Product Pressure (bar)",
        lbl_pur_tail_imp: "Tail Gas Impurity (%)",
        lbl_pur_tail_pres: "Tail Gas Pressure (bar)",
        panel_capex: "Capital Cost (CAPEX) & Maintenance",
        desc_capex: "CAPEX is calculated programmatically using the Six-Tenths Rule.",
        sub_pur: "Purification Unit",
        lbl_base_cost: "Base Cost ($)",
        lbl_base_cap: "Base Capacity",
        lbl_scale: "Scale Factor (n)",
        lbl_maint: "Annual Maint. (% OPEX)",
        sub_comp: "Compressors",
        lbl_base_kw: "Base Power (kW)",
        panel_opex: "Operating Costs (OPEX)",
        lbl_fresh_cost: "Fresh H2 Cost ($ / unit)",
        lbl_fuel_val: "Purge Fuel Value ($ / unit)",
        lbl_op_hrs: "Operating Hours (hr/yr)",
        hint_results: "Waiting for engineering engine execution...",
        sec_comp_eval: "Comparative Analysis & Evaluation (Membrane vs PSA)",
        sec_targets: "Pinch Targets",
        rc_fresh: "Minimum Fresh Target",
        rc_purge: "Final Purge Gas",
        sec_feasibility: "Feasibility & Cost Summary",
        rc_capex_pur: "CAPEX: Purification Unit",
        rcu_capex_pur: "Cost of Separation Unit",
        rc_capex_comp: "CAPEX: New Compressors",
        rcu_capex_comp: "Cost of Compressors",
        rc_capex_total: "Total CAPEX",
        rcu_capex_total: "Total Capital Investment",
        rc_opex_base: "Old Network OPEX",
        rcu_mat_cost: "(Material Cost)",
        rc_opex_new: "New Network OPEX",
        tt_opex_new: "Includes: Cost of Fresh H2 - Fuel value of Purge + Compressor power + Annual maintenance for new equipment.",
        rcu_inc_maint: "(Inc. Maint & Elec)",
        rc_savings: "Net OPEX Savings",
        rcu_yearly: "Yearly:",
        rc_payback: "Payback Period",
        rcu_years: "Years",
        hint_network: "Network diagram currently unavailable.",
        panel_net_diag: "Interactive Network Diagram",
        btn_zoom_in: "Zoom In",
        btn_zoom_out: "Zoom Out",
        btn_fit: "Fit to Screen",
        btn_save_img: "Save Image",
        hint_curve: "Composite Curve pending...",
        panel_curve: "Composite Curve",
        hint_table: "Cascade Table unavailable.",
        panel_cascade: "Problem Table Algorithm",
        status_ready: "System Ready",
        
        // JS Strings
        toast_meta_saved: "Project details saved temporarily",
        toast_img_large: "Image is too large. Max 2MB",
        toast_img_upload: "Logo uploaded successfully",
        msg_convert_unit: "Convert existing values to the new unit?\n[OK] Math conversion / [Cancel] Change label only",
        toast_unit_conv: "Values converted successfully",
        toast_recalc_warn: "Please run the analysis again to update costs based on the new unit",
        msg_del_confirm: "Are you sure you want to delete this item?",
        toast_neg_val: "Value cannot be negative",
        toast_imp_limit: "Impurity percentage must be between 0 and 100",
        new_source: "New Source",
        new_sink: "New Sink",
        toast_paste_empty: "No data entered!",
        toast_rows_added: "rows added successfully",
        toast_paste_err: "Invalid data format",
        toast_proj_saved: "Project saved successfully!",
        toast_save_err: "Error saving file.",
        toast_proj_loaded: "Project loaded successfully!",
        toast_load_err: "Invalid file format!",
        toast_load_invalid: "This file does not contain valid project data.",
        msg_clear_all: "Are you sure you want to clear all data?",
        toast_cleared: "Data cleared successfully",
        toast_min_req: "At least one source and one sink are required",
        toast_analysis_done: "Engineering analysis completed successfully!",
        toast_comp_done: "Comparative analysis completed successfully!",
        toast_img_err: "Diagram unavailable. Please run analysis first.",
        toast_img_saved: "Image saved successfully!",
        toast_pdf_req: "Please run the analysis before generating the report",
        toast_pdf_gen: "Generating PDF report...",
        toast_pdf_done: "Report generated successfully!",
        toast_pdf_err: "Error generating report",
        
        // Dynamic Table/Graph/PDF
        str_sources: "Sources",
        str_sinks: "Sinks",
        str_unfeasible: "Unfeasible",
        str_immediate: "Immediate (0.0)",
        str_comp_criteria: "Criteria",
        str_mem: "Membrane",
        str_psa: "PSA",
        str_capex: "Capital Investment (CAPEX)",
        str_net_sav: "Net Annual Savings",
        str_payback: "Payback Period",
        str_rec_pur: "Recovery Purity",
        str_years: "Years",
        str_rec_tech: "Engineering Recommendation: ",
        str_rec_desc: "Based on economic data, this technology is optimal for the network as it provides a faster capital payback period and higher economic return compared to the alternative.",
        str_rec_note: "(Note: The data listed in the following sections are based on the current user selection:",
        str_surplus: "Surplus",
        str_impurity: "Impurity",
        str_src_node: "Source: ",
        str_snk_node: "Sink: ",
        str_fresh_node: "Fresh H2",
        str_rec_node: "Recycled H2",
        str_tail_node: "Purifier Bottoms",
        str_purge_node: "Final Purge Gas",
        
        // PDF Strings
        pdf_main_title: "Hydrogen Network & Feasibility Report",
        pdf_company: "Company/Facility:",
        pdf_engineer: "Prepared by:",
        pdf_date: "Date:",
        pdf_sec_1_ar: "1. Comparative Analysis",
        pdf_sec_1_en: "(Membrane vs PSA)",
        pdf_sec_exec_ar: "Executive Summary",
        pdf_sec_exec_en: "(Technical & Economic)",
        pdf_card_fresh: "Fresh Target",
        pdf_card_capex: "Total CAPEX",
        pdf_card_new_op: "New Operation (Inc. Maint & Elec)",
        pdf_card_sav: "Continuous Net Savings",
        pdf_card_pb: "Payback Period",
        pdf_sec_net_ar: "Interactive Network Diagram",
        pdf_sec_net_en: "(Optimized Topology)",
        pdf_sec_curve_ar: "Composite Curve",
        pdf_sec_curve_en: "(Pinch Targeting)",
        pdf_sec_table_ar: "Problem Table Algorithm",
        pdf_sec_table_en: "(Cascade Output)",
        pdf_sec_notes_ar: "Notes & Conclusions",
        pdf_sec_notes_en: "(Engineer Remarks)",
        
        // Tour
        tour_1: "<strong>Welcome to H2 Pinch Analyzer!</strong><br><br>Here is a quick tour to learn how to use the software.",
        tour_2: "<strong>Sources:</strong><br>Enter the flow and impurity of available gases.",
        tour_3: "<strong>Sinks:</strong><br>Enter the units that consume hydrogen and their maximum impurity.",
        tour_4: "<strong>Navigation:</strong><br>Visit the (Cost Config) tab to adjust CAPEX and OPEX parameters.",
        tour_5: "<strong>Execution:</strong><br>Now you can enable (Compare) to run an analysis between different technologies with one click!",
        tour_6: "<strong>Export:</strong><br>Save your project or export the final report as PDF.",
        tour_next: "Next &rarr;",
        tour_prev: "&larr; Prev",
        tour_done: "Done"
    },
    ar: {
        excel_title: "استيراد سريع من Excel",
        excel_desc: "قم بنسخ البيانات من الإكسيل (Ctrl+C) ثم الصقها هنا (Ctrl+V) — الترتيب المطلوب:",
        excel_format: "الاسم | التدفق | الشوائب% | الضغط bar",
        excel_placeholder: "الصق البيانات هنا...",
        btn_cancel: "إلغاء",
        btn_import: "استيراد البيانات",
        meta_title: "بيانات المشروع",
        meta_proj_name: "اسم المشروع",
        meta_proj_ph: "مثال: H2 Network Optimization 2024",
        meta_comp_name: "اسم الشركة / المصفاة",
        meta_comp_ph: "مثال: شركة الإسكندرية للبترول",
        meta_eng_name: "اسم المهندس المُعد",
        meta_eng_ph: "مثال: م. أحمد محمد",
        meta_notes: "ملاحظات المهندس / استنتاجات",
        meta_notes_ph: "اكتب أي ملاحظات أو توصيات...",
        meta_logo: "شعار الشركة (Logo)",
        btn_choose_img: "اختيار صورة",
        btn_delete_logo: "حذف الشعار",
        btn_save_data: "حفظ البيانات",
        title_tour: "إعادة الجولة الإرشادية",
        theme_dark: "الداكن (Dark)",
        theme_light: "الصناعي (Light)",
        theme_green: "الطاقة النظيفة (Green)",
        theme_corp: "شركات البترول (Corporate)",
        title_meta: "إعدادات بيانات المشروع",
        title_new: "مشروع جديد",
        title_open: "فتح ملف مشروع (JSON)",
        title_save: "حفظ المشروع",
        btn_save: "حفظ",
        title_print: "طباعة التقرير",
        title_pdf: "تصدير كملف PDF",
        tab_data: "الإدخال الأساسي",
        tab_config: "إعدادات التكلفة (OPEX/CAPEX)",
        tab_results: "النتائج والجدوى",
        tab_network: "الشبكة المُحسنة",
        tab_curve: "المنحنى المركب",
        tab_table: "جدول التتابع",
        panel_src: "المصادر (Sources)",
        btn_excel: "إكسيل",
        btn_add_src: "إضافة مصدر",
        th_name: "الاسم",
        th_flow: "التدفق",
        th_imp: "الشوائب (%)",
        th_pres: "الضغط (bar)",
        panel_snk: "المستهلكات (Sinks)",
        btn_add_snk: "إضافة مستهلك",
        th_req: "الاحتياج",
        th_max_imp: "الحد الأقصى (%)",
        tt_fresh_imp: "نسبة الشوائب المسموح بها في مصدر الهيدروجين النقي الخارجي.",
        lbl_fresh_imp: "نسبة شوائب الهيدروجين النقي (%):",
        lbl_compare: "مقارنة: Membrane vs PSA",
        btn_run: "بدء التحليل الهندسي",
        panel_comp: "قيود الضغط والكباسات",
        lbl_en_pres: "تفعيل قيود الضغط وحساب استهلاك الطاقة للكباسات",
        lbl_comp_eff: "كفاءة الكباس (%)",
        lbl_comp_temp: "حرارة الدخول (K)",
        lbl_elec_cost: "تكلفة الكهرباء ($/kWh)",
        panel_pur: "وحدة التنقية (Purification Unit)",
        lbl_en_pur: "تفعيل وحدة تنقية لاسترجاع الهيدروجين من الغاز المطرود",
        lbl_pur_tech: "تقنية التنقية",
        opt_mem: "أغشية (Membrane)",
        opt_psa: "امتزاز (PSA)",
        lbl_pur_feed_pres: "ضغط التغذية (bar)",
        lbl_pur_feed_flow: "كمية التغذية",
        lbl_pur_feed_imp: "شوائب التغذية (%)",
        lbl_pur_prod_imp: "شوائب المنتج النقي (%)",
        lbl_pur_prod_pres: "ضغط المنتج النقي (bar)",
        lbl_pur_tail_imp: "شوائب الغاز العادم (%)",
        lbl_pur_tail_pres: "ضغط الغاز العادم (bar)",
        panel_capex: "إعدادات التكلفة الرأسمالية (CAPEX) والصيانة",
        desc_capex: "يتم حساب الـ CAPEX برمجياً باستخدام معادلة Six-Tenths Rule.",
        sub_pur: "وحدة التنقية (Purification Unit)",
        lbl_base_cost: "التكلفة المرجعية ($ Base)",
        lbl_base_cap: "السعة المرجعية",
        lbl_scale: "معامل التحجيم (Scale n)",
        lbl_maint: "الصيانة السنوية (% OPEX)",
        sub_comp: "الكباسات (Compressors)",
        lbl_base_kw: "الطاقة المرجعية (Base kW)",
        panel_opex: "التكاليف التشغيلية (OPEX Parameters)",
        lbl_fresh_cost: "تكلفة الفريش هيدروجين ($ / وحدة)",
        lbl_fuel_val: "قيمة المطرود كوقود ($ / وحدة)",
        lbl_op_hrs: "ساعات التشغيل السنوية (hr/yr)",
        hint_results: "في انتظار تشغيل محرك الحسابات الهندسية...",
        sec_comp_eval: "التحليل المقارن والتقييم الهندسي (Membrane vs PSA)",
        sec_targets: "الأهداف الرئيسية الفنية (Pinch Targets)",
        rc_fresh: "الحد الأدنى للهيدروجين النقي",
        rc_purge: "الغاز المطرود النهائي",
        sec_feasibility: "دراسة الجدوى الاقتصادية",
        rc_capex_pur: "CAPEX: وحدة التنقية",
        rcu_capex_pur: "Cost of Separation Unit",
        rc_capex_comp: "CAPEX: الكباسات الجديدة",
        rcu_capex_comp: "Cost of Compressors",
        rc_capex_total: "إجمالي الاستثمار (Total CAPEX)",
        rcu_capex_total: "إجمالي التكلفة الرأسمالية المطلوبة",
        rc_opex_base: "OPEX الشبكة القديمة",
        rcu_mat_cost: "(تكلفة المادة)",
        rc_opex_new: "OPEX الشبكة الجديدة",
        tt_opex_new: "تشمل: تكلفة الهيدروجين المضاف - عائد الغاز المطرود + كهرباء الكباسات + الصيانة السنوية للمعدات الجديدة وتغيير الأغشية.",
        rcu_inc_maint: "(شامل الصيانة والكهرباء)",
        rc_savings: "التوفير الصافي (Net Savings)",
        rcu_yearly: "سنوياً:",
        rc_payback: "فترة الاسترداد (Payback)",
        rcu_years: "سنوات (Years)",
        hint_network: "المخطط الشبكي غير متاح حالياً",
        panel_net_diag: "مخطط الشبكة التفاعلي",
        btn_zoom_in: "تكبير العرض",
        btn_zoom_out: "تصغير العرض",
        btn_fit: "احتواء كامل بالشاشة",
        btn_save_img: "حفظ كصورة",
        hint_curve: "المنحنى المركب قيد الانتظار...",
        panel_curve: "منحنى البنش المركب (Composite Curve)",
        hint_table: "جدول التتابع غير متاح",
        panel_cascade: "جدول التتابع الجبري",
        status_ready: "النظام جاهز",

        // JS Strings
        toast_meta_saved: "تم حفظ بيانات المشروع مؤقتاً",
        toast_img_large: "حجم الصورة كبير جداً. الحد الأقصى 2 ميجابايت",
        toast_img_upload: "تم رفع الشعار بنجاح",
        msg_convert_unit: "تحويل الأرقام الموجودة إلى الوحدة الجديدة؟\n[OK] تحويل حسابي / [Cancel] تغيير الاسم فقط",
        toast_unit_conv: "تم تحويل الأرقام بنجاح",
        toast_recalc_warn: "برجاء إعادة الحساب لتحديث التكاليف بناءً على الوحدة الجديدة",
        msg_del_confirm: "هل أنت متأكد من حذف هذا العنصر؟",
        toast_neg_val: "لا يمكن أن تكون القيمة سالبة",
        toast_imp_limit: "نسبة الشوائب يجب أن تكون بين 0 و 100",
        new_source: "مصدر جديد",
        new_sink: "مستهلك جديد",
        toast_paste_empty: "لم تقم بإدخال أي بيانات!",
        toast_rows_added: "صفوف أضيفت بنجاح",
        toast_paste_err: "صيغة البيانات غير صحيحة",
        toast_proj_saved: "تم حفظ المشروع بنجاح!",
        toast_save_err: "حدث خطأ أثناء حفظ الملف.",
        toast_proj_loaded: "تم استرجاع بيانات المشروع بنجاح!",
        toast_load_err: "صيغة الملف غير صالحة!",
        toast_load_invalid: "هذا الملف لا يحتوي على بيانات مشروع صالحة.",
        msg_clear_all: "هل أنت متأكد من مسح جميع البيانات؟",
        toast_cleared: "تم مسح البيانات بنجاح",
        toast_min_req: "يجب إدخال مصدر واحد ومستهلك واحد على الأقل",
        toast_analysis_done: "اكتمل التحليل الهندسي بنجاح!",
        toast_comp_done: "تم إجراء التحليل المقارن بنجاح!",
        toast_img_err: "الرسم غير متاح حالياً. يرجى تشغيل التحليل أولاً.",
        toast_img_saved: "تم حفظ الصورة بنجاح!",
        toast_pdf_req: "برجاء إجراء التحليل أولاً قبل محاولة إنشاء التقرير",
        toast_pdf_gen: "جاري إنشاء تقرير الـ PDF...",
        toast_pdf_done: "تم تحميل التقرير بنجاح!",
        toast_pdf_err: "حدث خطأ أثناء إنشاء التقرير",

        str_sources: "مصادر",
        str_sinks: "مستهلك",
        str_unfeasible: "غير مجدي",
        str_immediate: "فوري (0.0)",
        str_comp_criteria: "وجه المقارنة",
        str_mem: "Membrane (الأغشية)",
        str_psa: "PSA (الامتزاز)",
        str_capex: "الاستثمار المطلوب (CAPEX)",
        str_net_sav: "التوفير السنوي الصافي (Savings)",
        str_payback: "فترة الاسترداد (Payback)",
        str_rec_pur: "نقاء الاسترجاع (Recovery Purity)",
        str_years: "سنوات",
        str_rec_tech: "التوصية الهندسية: تقنية الـ ",
        str_rec_desc: "بناءً على المعطيات الاقتصادية، تعتبر هذه التقنية هي الأفضل للشبكة حيث توفر فترة استرداد أسرع وعائداً اقتصادياً أعلى مقارنة بالبديل الآخر.",
        str_rec_note: "(ملاحظة: البيانات المسرودة في الأقسام التالية مبنية على اختيار المستخدم الحالي:",
        str_surplus: "الفائض",
        str_impurity: "الشوائب",
        str_src_node: "المصدر: ",
        str_snk_node: "المستهلك: ",
        str_fresh_node: "Fresh H2",
        str_rec_node: "Recycled H2",
        str_tail_node: "Purifier Bottoms",
        str_purge_node: "Final Purge Gas",

        pdf_main_title: "تقرير تحليل شبكة الهيدروجين والجدوى الاقتصادية",
        pdf_company: "الشركة / المنشأة:",
        pdf_engineer: "إعداد المهندس:",
        pdf_date: "تاريخ التقرير:",
        pdf_sec_1_ar: "1. التقييم المقارن",
        pdf_sec_1_en: "(Membrane vs PSA)",
        pdf_sec_exec_ar: "ملخص الجدوى الفنية والاقتصادية",
        pdf_sec_exec_en: "(Executive Summary)",
        pdf_card_fresh: "الهيدروجين النقي (Fresh Target)",
        pdf_card_capex: "إجمالي الاستثمار المطلوب (CAPEX)",
        pdf_card_new_op: "التشغيل الجديد (شامل الصيانة والكهرباء)",
        pdf_card_sav: "التوفير الصافي المستمر",
        pdf_card_pb: "فترة استرداد رأس المال (Payback)",
        pdf_sec_net_ar: "مخطط الشبكة التفاعلي",
        pdf_sec_net_en: "(Network Diagram)",
        pdf_sec_curve_ar: "منحنى البنش المركب",
        pdf_sec_curve_en: "(Composite Curve)",
        pdf_sec_table_ar: "جدول التتابع الجبري",
        pdf_sec_table_en: "(Problem Table Algorithm)",
        pdf_sec_notes_ar: "الملاحظات والاستنتاجات",
        pdf_sec_notes_en: "(Notes & Conclusions)",

        tour_1: "<strong>مرحباً بك في H2 Pinch Analyzer!</strong><br><br>هذه جولة سريعة لتتعرف على كيفية استخدام البرنامج.",
        tour_2: "<strong>المصادر (Sources):</strong><br>أدخل التدفق ونسبة الشوائب للغازات المتاحة.",
        tour_3: "<strong>المستهلكات (Sinks):</strong><br>أدخل الوحدات التي تستهلك الهيدروجين والحد الأقصى للشوائب.",
        tour_4: "<strong>التنقل:</strong><br>قم بزيارة صفحة (الإعدادات الاقتصادية) لضبط الـ CAPEX والـ OPEX.",
        tour_5: "<strong>التشغيل:</strong><br>الآن يمكنك تفعيل (المقارنة) لعمل تحليل بين التقنيات المختلفة بضغطة زر!",
        tour_6: "<strong>التصدير:</strong><br>احفظ المشروع أو قم بتصدير التقرير النهائي كـ PDF.",
        tour_next: "التالي &larr;",
        tour_prev: "&rarr; السابق",
        tour_done: "إنهاء الجولة"
    }
};

let currentLang = localStorage.getItem('h2_pinch_lang') || 'en';

function t(key) { return translations[currentLang][key] || key; }

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('h2_pinch_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langSelector').value = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(translations[lang][key]) el.placeholder = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if(translations[lang][key]) el.title = translations[lang][key];
    });

    renderTables();
    updateStatusBar();
    
    // Re-render charts and networks if results are visible to update labels
    if(document.getElementById('badge-results') && !document.getElementById('badge-results').classList.contains('hidden-badge')) {
        if(lastNetworkData) drawInteractiveNetwork(lastNetworkData, document.getElementById('enable_pressure').checked);
        if(hgccChartInstance && window.lastChartParams) {
            drawCompositeCurveChart(window.lastChartParams.res, window.lastChartParams.freshTarget, window.lastChartParams.freshImp);
        }
        if(comparisonData) updateComparisonUI(comparisonData.memResults, comparisonData.psaResults, comparisonData.winner);
    }
}

// --- END I18N DICTIONARY ---

let projectMeta = { projectName: '', companyName: '', engineerName: '', notes: '', logoBase64: '' };
let comparisonData = null; // Store comparison results globally for PDF

function openMetaModal() { document.getElementById('meta_projectName').value = projectMeta.projectName || ''; document.getElementById('meta_companyName').value = projectMeta.companyName || ''; document.getElementById('meta_engineerName').value = projectMeta.engineerName || ''; document.getElementById('meta_notes').value = projectMeta.notes || ''; updateLogoPreview(); document.getElementById('metaModal').classList.add('open'); }
function saveMetaModal() { projectMeta.projectName = document.getElementById('meta_projectName').value.trim(); projectMeta.companyName = document.getElementById('meta_companyName').value.trim(); projectMeta.engineerName = document.getElementById('meta_engineerName').value.trim(); projectMeta.notes = document.getElementById('meta_notes').value.trim(); closeModal('metaModal'); showToast(t('toast_meta_saved'), 'success'); }
function handleLogoUpload(event) { const file = event.target.files[0]; if (!file) return; if (file.size > 2 * 1024 * 1024) { showToast(t('toast_img_large'), 'error'); event.target.value = ''; return; } const reader = new FileReader(); reader.onload = function(e) { projectMeta.logoBase64 = e.target.result; updateLogoPreview(); showToast(t('toast_img_upload'), 'success'); }; reader.readAsDataURL(file); }
function removeLogo() { projectMeta.logoBase64 = ''; document.getElementById('meta_logo_input').value = ''; updateLogoPreview(); }
function updateLogoPreview() { const container = document.getElementById('logo_preview_container'), img = document.getElementById('logo_preview_img'), btnRemove = document.getElementById('btn_remove_logo'); if (projectMeta.logoBase64 && projectMeta.logoBase64 !== '') { img.src = projectMeta.logoBase64; container.style.display = 'flex'; btnRemove.style.display = 'inline-flex'; } else { img.src = ''; container.style.display = 'none'; btnRemove.style.display = 'none'; } }
function closeModal(modalId) { document.getElementById(modalId).classList.remove('open'); }

function startTour() {
    switchTab('tab-data');
    introJs().setOptions({ nextLabel: t('tour_next'), prevLabel: t('tour_prev'), doneLabel: t('tour_done'), showStepNumbers: false, exitOnOverlayClick: false, steps: [ { element: document.getElementById('tour-step-1'), intro: t('tour_1') }, { element: document.getElementById('tour-step-2'), intro: t('tour_2') }, { element: document.getElementById('tour-step-3'), intro: t('tour_3') }, { element: document.getElementById('tabbar'), intro: t('tour_4') }, { element: document.getElementById('tour-step-4'), intro: t('tour_5') }, { element: document.getElementById('tour-step-6'), intro: t('tour_6') } ] }).start();
}

document.addEventListener('DOMContentLoaded', () => { 
    setLanguage(currentLang);
    loadTheme(); 
    if(!localStorage.getItem('h2_tour_done_v2')) { setTimeout(() => { startTour(); localStorage.setItem('h2_tour_done_v2', 'true'); }, 800); } 
});

function changeTheme(themeName) { document.documentElement.setAttribute('data-theme', themeName); localStorage.setItem('h2_pinch_theme', themeName); if (hgccChartInstance) { const rootStyles = getComputedStyle(document.documentElement); const textColor = rootStyles.getPropertyValue('--text-2').trim(); const gridColor = (themeName === 'light' || themeName === 'green') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)'; hgccChartInstance.options.scales.x.ticks.color = textColor; hgccChartInstance.options.scales.x.title.color = textColor; hgccChartInstance.options.scales.x.grid.color = gridColor; hgccChartInstance.options.scales.y.ticks.color = textColor; hgccChartInstance.options.scales.y.title.color = textColor; hgccChartInstance.options.scales.y.grid.color = gridColor; hgccChartInstance.update(); } if (visNetworkInstance && typeof lastNetworkData !== 'undefined' && lastNetworkData) { const isPressureEnabled = document.getElementById('enable_pressure').checked; drawInteractiveNetwork(lastNetworkData, isPressureEnabled); } }
function loadTheme() { const savedTheme = localStorage.getItem('h2_pinch_theme') || 'dark'; document.getElementById('themeSelector').value = savedTheme; document.documentElement.setAttribute('data-theme', savedTheme); }

function switchTab(id) { document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); document.getElementById(id).classList.add('active'); const map = { 'tab-data':'t-data', 'tab-config':'t-config', 'tab-results':'t-results', 'tab-network':'t-network', 'tab-curve':'t-curve', 'tab-table':'t-table' }; const tabElement = document.getElementById(map[id]); tabElement.classList.add('active'); tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); if (id === 'tab-curve' && hgccChartInstance) { setTimeout(() => hgccChartInstance.resize(), 50); } if (id === 'tab-network' && visNetworkInstance) { setTimeout(() => visNetworkInstance.fit(), 50); } }

function showToast(msg, type='info') { const c = document.getElementById('toast-container'); const tEl = document.createElement('div'); const icons = { success:'fa-circle-check', error:'fa-circle-xmark', warning:'fa-triangle-exclamation', info:'fa-circle-info' }; const rootStyles = getComputedStyle(document.documentElement); const colors = { success:rootStyles.getPropertyValue('--green').trim(), error:rootStyles.getPropertyValue('--red').trim(), warning:rootStyles.getPropertyValue('--yellow').trim(), info:rootStyles.getPropertyValue('--accent').trim() }; tEl.className = `toast ${type}`; tEl.innerHTML = `<i class="fa-solid ${icons[type]||icons.info}" style="color:${colors[type]||colors.info}; font-size:16px;"></i> <span>${msg}</span>`; c.appendChild(tEl); setTimeout(() => { tEl.classList.add('leaving'); setTimeout(() => tEl.remove(), 300); }, 3500); }
function validateLimits(el, min, max) { let v = parseFloat(el.value); if (isNaN(v)) v = min ?? 0; let hasError = false; let errorMsg = ''; if (min !== null && v < min) { v = min; hasError = true; errorMsg = t('toast_neg_val'); } if (max !== null && v > max) { v = max; hasError = true; errorMsg = t('toast_imp_limit'); } if (hasError) { showToast(errorMsg, 'warning'); el.style.borderColor = 'var(--red)'; el.style.boxShadow = '0 0 0 2px rgba(239,68,68,0.2)'; el.style.color = 'var(--red)'; setTimeout(() => { el.style.borderColor = ''; el.style.boxShadow = ''; el.style.color = ''; }, 2500); } el.value = v; }
function exportCanvasAsPNG(canvasSelector, fileName) { const canvas = document.querySelector(canvasSelector); if (!canvas) { showToast(t('toast_img_err'), 'warning'); return; } const tempCanvas = document.createElement('canvas'); tempCanvas.width = canvas.width; tempCanvas.height = canvas.height; const ctx = tempCanvas.getContext('2d'); const rootStyles = getComputedStyle(document.documentElement); ctx.fillStyle = rootStyles.getPropertyValue('--bg-app').trim(); ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height); ctx.drawImage(canvas, 0, 0); const link = document.createElement('a'); link.download = fileName; link.href = tempCanvas.toDataURL('image/png', 1.0); link.click(); showToast(t('toast_img_saved'), 'success'); }

let currentUnit = 'Kgmol/hr'; const unitFactors = { 'Kgmol/hr':1, 'MMSCFD':49.8, 'Nm3/hr':0.0446, 'kg/hr':0.496 };
function handleUnitChange(newUnit) { if (newUnit === currentUnit) return; if (confirm(t('msg_convert_unit'))) { let f = unitFactors[currentUnit] / unitFactors[newUnit]; sources.forEach(s => s.flow = parseFloat((s.flow * f).toFixed(2))); sinks.forEach(s => s.req = parseFloat((s.req * f).toFixed(2))); let pCap = document.getElementById('capex_pur_base_cap'); pCap.value = parseFloat((parseFloat(pCap.value) * f).toFixed(2)); showToast(t('toast_unit_conv'), 'success'); } currentUnit = newUnit; updateUnitLabels(); renderTables(); if(!document.getElementById('badge-results').classList.contains('hidden-badge')) showToast(t('toast_recalc_warn'), 'warning'); }
function updateUnitLabels() { document.querySelectorAll('.flow-unit-label').forEach(el => el.textContent = `(${currentUnit})`); document.getElementById('unitSelector').value = currentUnit; document.getElementById('status-unit').textContent = currentUnit; }

let sources = [ { id:'src_1', name:'Source 1', flow:623.8, impurity:7.0, pressure:100 }, { id:'src_2', name:'Source 2', flow:415.8, impurity:20.0, pressure:100 }, { id:'src_3', name:'Source 3', flow:1940.5, impurity:25.0, pressure:100 }, { id:'src_4', name:'Source 4', flow:346.5, impurity:27.0, pressure:100 }, { id:'src_5', name:'Source 5', flow:457.4, impurity:30.0, pressure:100 } ];
let sinks = [ { id:'snk_1', name:'Sink 1', req:2495.0, maxImp:19.39, pressure:100 }, { id:'snk_2', name:'Sink 2', req:180.2, maxImp:21.15, pressure:100 }, { id:'snk_3', name:'Sink 3', req:554.4, maxImp:22.43, pressure:100 }, { id:'snk_4', name:'Sink 4', req:720.7, maxImp:24.86, pressure:100 } ];

function updateStatusBar() { document.getElementById('status-src').textContent = `${sources.length} ${t('str_sources')}`; document.getElementById('status-snk').textContent = `${sinks.length} ${t('str_sinks')}`; }
function renderTables() { const isPressureEnabled = document.getElementById('enable_pressure').checked; const pc = isPressureEnabled ? '' : 'display:none;'; const srcBody = document.getElementById('sourcesBody'); srcBody.innerHTML = ''; sources.forEach((s, i) => { srcBody.innerHTML += `<tr><td><input type="text" value="${s.name}" onchange="updateData('src',${i},'name',this.value)" class="eng-input" style="background:transparent; border-color:transparent; min-width:80px;"></td><td><input type="number" min="0" value="${s.flow}" onchange="updateData('src',${i},'flow',this.value)" class="eng-input" style="width:100%; min-width:70px; direction:ltr; color:var(--accent-hi); font-weight:700;"></td><td><input type="number" min="0" max="100" value="${s.impurity}" step="0.01" onchange="updateData('src',${i},'impurity',this.value)" class="eng-input" style="width:100%; min-width:70px; direction:ltr;"></td><td class="pressure-col" style="${pc}"><input type="number" min="0" value="${s.pressure}" step="0.1" onchange="updateData('src',${i},'pressure',this.value)" class="eng-input" style="width:100%; min-width:70px; direction:ltr; color:var(--accent);"></td><td class="no-print"><button class="btn-sm del" onclick="removeData('src',${i})" title="Delete"><i class="fa-solid fa-trash"></i></button></td></tr>`; }); const snkBody = document.getElementById('sinksBody'); snkBody.innerHTML = ''; sinks.forEach((s, i) => { snkBody.innerHTML += `<tr><td><input type="text" value="${s.name}" onchange="updateData('snk',${i},'name',this.value)" class="eng-input" style="background:transparent; border-color:transparent; min-width:80px;"></td><td><input type="number" min="0" value="${s.req}" onchange="updateData('snk',${i},'req',this.value)" class="eng-input" style="width:100%; min-width:70px; direction:ltr; color:var(--orange); font-weight:700;"></td><td><input type="number" min="0" max="100" value="${s.maxImp}" step="0.01" onchange="updateData('snk',${i},'maxImp',this.value)" class="eng-input" style="width:100%; min-width:70px; direction:ltr;"></td><td class="pressure-col" style="${pc}"><input type="number" min="0" value="${s.pressure}" step="0.1" onchange="updateData('snk',${i},'pressure',this.value)" class="eng-input" style="width:100%; min-width:70px; direction:ltr; color:var(--accent);"></td><td class="no-print"><button class="btn-sm del" onclick="removeData('snk',${i})" title="Delete"><i class="fa-solid fa-trash"></i></button></td></tr>`; }); document.querySelectorAll('.pressure-col').forEach(el => el.style.display = isPressureEnabled ? '' : 'none'); updateStatusBar(); }
function updateData(type, index, field, value) { if (field === 'name') { if (type === 'src') sources[index][field] = value; else sinks[index][field] = value; return; } let v = parseFloat(value); if (isNaN(v)) v = 0; if ((field==='flow'||field==='req'||field==='pressure') && v<0) { v=0; showToast(t('toast_neg_val'),'warning'); } if ((field==='impurity'||field==='maxImp') && (v<0||v>100)) { v=Math.max(0,Math.min(100,v)); showToast(t('toast_imp_limit'),'warning'); } if (type==='src') sources[index][field]=v; else sinks[index][field]=v; renderTables(); }
function removeData(type, index) { if (confirm(t('msg_del_confirm'))) { if (type==='src') sources.splice(index,1); else sinks.splice(index,1); renderTables(); } }
function addSource() { sources.push({id:'src_'+Date.now(), name: t('new_source'), flow:100, impurity:5.0, pressure:100}); renderTables(); }
function addSink() { sinks.push({id:'snk_'+Date.now(), name: t('new_sink'), req:100, maxImp:10.0, pressure:100}); renderTables(); }

function togglePressure() { const on = document.getElementById('enable_pressure').checked; document.getElementById('comp_settings_panel').style.display = on ? '' : 'none'; renderTables(); }
function togglePurifier() { document.getElementById('purifier_settings').style.display = document.getElementById('enable_purifier').checked ? '' : 'none'; }
function changePurifierType() {
    const t = document.getElementById('purifier_type').value; const p = document.getElementById('pur_prod_imp'), tl = document.getElementById('pur_tail_imp'); const pp = document.getElementById('pur_prod_pres'), pt = document.getElementById('pur_tail_pres'); const baseCost = document.getElementById('capex_pur_base_cost'), scaleFactor = document.getElementById('capex_pur_scale'); const opexPercent = document.getElementById('opex_pur_percent'); let feedPres = parseFloat(document.getElementById('pur_feed_pres').value) || 100;
    if (t === 'membrane') { p.value = 2.0; tl.value = 89.11; p.readOnly = true; tl.readOnly = true; pp.value = (feedPres * 0.30).toFixed(1); pt.value = Math.max(1, feedPres - 5).toFixed(1); baseCost.value = 2500000; scaleFactor.value = 0.85; opexPercent.value = 8.0; }
    else if (t === 'psa') { p.value = 0.1; tl.value = 81.05; p.readOnly = true; tl.readOnly = true; pp.value = Math.max(1, feedPres - 2).toFixed(1); pt.value = 2.0; baseCost.value = 5000000; scaleFactor.value = 0.65; opexPercent.value = 5.0; }
}

let currentPasteType = 'src';
function openExcelModal(type) { currentPasteType = type; document.getElementById('excelPasteArea').value = ''; document.getElementById('excelModal').classList.add('open'); document.getElementById('btnConfirmPaste').onclick = () => processExcelPaste(type); setTimeout(() => document.getElementById('excelPasteArea').focus(), 100); }
function processExcelPaste(type) { const text = document.getElementById('excelPasteArea').value; if (!text.trim()) { showToast(t('toast_paste_empty'),'warning'); return; } let valid = 0; text.split(/\r?\n/).forEach(row => { if (!row.trim()) return; const cols = row.split('\t'); if (cols.length >= 2) { let fl = parseFloat(cols[1].replace(/,/g,'')), imp = cols[2]?parseFloat(cols[2].replace(/,/g,'')):0, pr = cols[3]?parseFloat(cols[3].replace(/,/g,'')):100; const ni = { id:type+'_'+Date.now()+Math.random(), name:cols[0]?cols[0].trim():'Item '+(valid+1), flow:isNaN(fl)?0:fl, impurity:isNaN(imp)?0:imp, pressure:isNaN(pr)?100:pr }; if (type==='src') sources.push(ni); else { ni.req=ni.flow; ni.maxImp=ni.impurity; delete ni.flow; delete ni.impurity; sinks.push(ni); } valid++; } }); closeModal('excelModal'); renderTables(); valid>0 ? showToast(`${valid} ${t('toast_rows_added')}`,'success') : showToast(t('toast_paste_err'),'error'); }

function saveProject() { try { const d = { version:'3.6.0', meta: projectMeta, sources, sinks, settings:{ unit:currentUnit, enablePressure:document.getElementById('enable_pressure').checked, compEff:parseFloat(document.getElementById('comp_eff').value), compTemp:parseFloat(document.getElementById('comp_temp').value), elecCost:parseFloat(document.getElementById('elec_cost').value), enablePurifier:document.getElementById('enable_purifier').checked, purifierType:document.getElementById('purifier_type').value, purFeedPres:parseFloat(document.getElementById('pur_feed_pres').value), purProdImp:parseFloat(document.getElementById('pur_prod_imp').value), purProdPres:parseFloat(document.getElementById('pur_prod_pres').value), purTailImp:parseFloat(document.getElementById('pur_tail_imp').value), purTailPres:parseFloat(document.getElementById('pur_tail_pres').value), capexPurBaseCost:parseFloat(document.getElementById('capex_pur_base_cost').value), capexPurBaseCap:parseFloat(document.getElementById('capex_pur_base_cap').value), capexPurScale:parseFloat(document.getElementById('capex_pur_scale').value), opexPurPercent:parseFloat(document.getElementById('opex_pur_percent').value), capexCompBaseCost:parseFloat(document.getElementById('capex_comp_base_cost').value), capexCompBaseCap:parseFloat(document.getElementById('capex_comp_base_cap').value), capexCompScale:parseFloat(document.getElementById('capex_comp_scale').value), opexCompPercent:parseFloat(document.getElementById('opex_comp_percent').value), freshCost:parseFloat(document.getElementById('fresh_h2_cost').value), fuelValue:parseFloat(document.getElementById('fuel_value').value), freshImpurity:parseFloat(document.getElementById('fresh_impurity').value), opHours:parseFloat(document.getElementById('op_hours').value) } }; const blob = new Blob([JSON.stringify(d,null,2)],{type:'application/json'}); const a = document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=(projectMeta.projectName || 'H2_Pinch_Project') + '.json'; document.body.appendChild(a); a.click(); document.body.removeChild(a); showToast(t('toast_proj_saved'),'success'); } catch(e) { showToast(t('toast_save_err'),'error'); } }
function triggerLoadProject() { document.getElementById('fileInput').click(); }
function loadProject(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function(e) { try { const data = JSON.parse(e.target.result); if (data.sources && data.sinks) { projectMeta = data.meta ? Object.assign({ projectName: '', companyName: '', engineerName: '', notes: '', logoBase64: '' }, data.meta) : { projectName: '', companyName: '', engineerName: '', notes: '', logoBase64: '' }; sources=data.sources; sinks=data.sinks; if (data.settings) { if (data.settings.unit) { currentUnit=data.settings.unit; updateUnitLabels(); } document.getElementById('enable_pressure').checked = data.settings.enablePressure||false; if (data.settings.compEff) document.getElementById('comp_eff').value=data.settings.compEff; if (data.settings.compTemp) document.getElementById('comp_temp').value=data.settings.compTemp; if (data.settings.elecCost!==undefined) document.getElementById('elec_cost').value=data.settings.elecCost; document.getElementById('enable_purifier').checked=data.settings.enablePurifier||false; document.getElementById('purifier_type').value=data.settings.purifierType||'membrane'; if (data.settings.purFeedPres) document.getElementById('pur_feed_pres').value=data.settings.purFeedPres; document.getElementById('pur_prod_imp').value=data.settings.purProdImp||2.0; if (data.settings.purProdPres) document.getElementById('pur_prod_pres').value=data.settings.purProdPres; document.getElementById('pur_tail_imp').value=data.settings.purTailImp||89.11; if (data.settings.purTailPres) document.getElementById('pur_tail_pres').value=data.settings.purTailPres; if (data.settings.capexPurBaseCost) document.getElementById('capex_pur_base_cost').value=data.settings.capexPurBaseCost; if (data.settings.capexPurBaseCap) document.getElementById('capex_pur_base_cap').value=data.settings.capexPurBaseCap; if (data.settings.capexPurScale) document.getElementById('capex_pur_scale').value=data.settings.capexPurScale; if (data.settings.opexPurPercent) document.getElementById('opex_pur_percent').value=data.settings.opexPurPercent; if (data.settings.capexCompBaseCost) document.getElementById('capex_comp_base_cost').value=data.settings.capexCompBaseCost; if (data.settings.capexCompBaseCap) document.getElementById('capex_comp_base_cap').value=data.settings.capexCompBaseCap; if (data.settings.capexCompScale) document.getElementById('capex_comp_scale').value=data.settings.capexCompScale; if (data.settings.opexCompPercent) document.getElementById('opex_comp_percent').value=data.settings.opexCompPercent; document.getElementById('fresh_h2_cost').value=data.settings.freshCost||2.5; document.getElementById('fuel_value').value=data.settings.fuelValue||0.5; document.getElementById('fresh_impurity').value=data.settings.freshImpurity||5.0; if (data.settings.opHours) document.getElementById('op_hours').value=data.settings.opHours; togglePressure(); togglePurifier(); } renderTables(); showToast(t('toast_proj_loaded'),'success'); } else showToast(t('toast_load_invalid'),'error'); } catch(e) { showToast(t('toast_load_err'),'error'); } event.target.value=''; }; reader.readAsText(file); }
function clearAllData() { if (confirm(t('msg_clear_all'))) { sources=[]; sinks=[]; projectMeta = { projectName: '', companyName: '', engineerName: '', notes: '', logoBase64: '' }; comparisonData = null; renderTables(); ['results','network','curve','table'].forEach(id => { document.getElementById(`badge-${id}`).classList.add('hidden-badge'); document.getElementById(`${id}-content`) && (document.getElementById(`${id}-content`).style.display='none'); document.getElementById(`${id}-hint`) && (document.getElementById(`${id}-hint`).style.display='flex'); }); document.getElementById('results-hint').style.display='flex'; document.getElementById('results-content').style.display='none'; showToast(t('toast_cleared'),'success'); } }

// ── Math Engine & Extractor ─────────────────────────────────────────

function runProblemTable(currentSources, currentSinks, freshImp) {
    let impSet = new Set(); impSet.add(freshImp); currentSources.forEach(s => impSet.add(s.impurity)); currentSinks.forEach(s => impSet.add(s.maxImp));
    let C = Array.from(impSet).sort((a,b) => a-b), n=C.length;
    let Fsr=new Array(n).fill(0), Fsk=new Array(n).fill(0);
    currentSources.forEach(s => { let i=C.indexOf(s.impurity); Fsr[i]+=s.flow; });
    currentSinks.forEach(s => { let i=C.indexOf(s.maxImp); Fsk[i]+=s.req; });
    let ex_Net=new Array(n).fill(0), ex_Fc=new Array(n).fill(0), ex_m=new Array(n).fill(0), ex_cum_m=new Array(n).fill(0), ex_Ff=new Array(n).fill(0);
    for (let k=0;k<n;k++) { ex_Net[k]=Fsr[k]-Fsk[k]; ex_Fc[k]=k===0?ex_Net[k]:ex_Fc[k-1]+ex_Net[k]; }
    for (let k=0;k<n-1;k++) { let dC=(C[k+1]-C[k])/100; ex_m[k]=ex_Fc[k]*dC; ex_cum_m[k+1]=ex_cum_m[k]+ex_m[k]; if(C[k+1]>freshImp) ex_Ff[k+1]=ex_cum_m[k+1]/((C[k+1]-freshImp)/100); }
    let minFfk=0; for(let k=0;k<n;k++) if(ex_Ff[k]<minFfk) minFfk=ex_Ff[k]; let minFresh=minFfk<0?-minFfk:0;
    let totalSrc=currentSources.reduce((s,x)=>s+x.flow,0), totalSnk=currentSinks.reduce((s,x)=>s+x.req,0);
    let volDeficit=Math.max(0,totalSnk-totalSrc); if(volDeficit>minFresh) minFresh=volDeficit;
    let pinchIndex=-1, closest=Infinity;
    for(let k=1;k<n;k++) { let sh=ex_cum_m[k]+minFresh*((C[k]-freshImp)/100); if(Math.abs(sh)<closest){closest=Math.abs(sh); if(Math.abs(sh)<0.01) pinchIndex=k;} }
    let purgeFlow=Math.max(0,totalSrc+minFresh-totalSnk);
    let purgeImpMass=currentSources.reduce((s,x)=>s+(x.flow*x.impurity),0)+minFresh*freshImp-currentSinks.reduce((s,x)=>s+(x.req*x.maxImp),0);
    let purgeImp=purgeFlow>0.001?purgeImpMass/purgeFlow:0;
    return { minFresh, purgeFlow, purgeImp, pinchIndex, Fsk, Fsr, ex_Net, ex_Fc, ex_m, ex_cum_m, ex_Ff, C, n };
}

function calculateConnections(freshTarget, freshImp, internalPurge, currentSources, currentSinks, isPressureEnabled) {
    let activeSources = currentSources.map(s=>({...s, avail:s.flow, type:s.type||'source'}));
    if(freshTarget>0.001) activeSources.push({id:'fresh_node',name: t('str_fresh_node'),flow:freshTarget,avail:freshTarget,impurity:freshImp,pressure:9999,type:'fresh'});
    let activeSinks = currentSinks.map(s=>({...s, needed:s.req, currentFlow:0, type:'sink'}));
    activeSinks.sort((a,b)=>a.maxImp-b.maxImp);
    let connections=[], totalCompPower_kW=0;
    let T1=parseFloat(document.getElementById('comp_temp').value)||300; let eff=(parseFloat(document.getElementById('comp_eff').value)||75)/100;
    let gamma=1.4, R=8.314, factor=gamma/(gamma-1);
    function addConnection(src,snk,flow) {
        if(flow<=0.0001) return;
        let needsComp=isPressureEnabled&&(src.pressure<snk.pressure)&&(src.id!=='fresh_node')&&(snk.id!=='purge_node');
        let compPower=0;
        if(needsComp){ let fks=(flow*unitFactors[currentUnit])/3600; compPower=fks*(R*T1/eff)*factor*(Math.pow(snk.pressure/src.pressure,(gamma-1)/gamma)-1); totalCompPower_kW+=compPower; }
        let ex=connections.find(c=>c.sourceId===src.id&&c.sinkId===snk.id);
        if(ex){ex.flow+=flow; if(needsComp) ex.compPower+=compPower;}
        else connections.push({sourceId:src.id, sinkId:snk.id, flow, imp:src.impurity, needsCompressor:needsComp, compPower});
        src.avail-=flow; snk.needed-=flow; snk.currentFlow+=flow;
    }
    let sinksToProcess=activeSinks.filter(s=>s.id!=='purge_node');
    for(let sink of sinksToProcess){
        while(sink.needed>0.0001){
            let cleanSrcs=activeSources.filter(s=>s.impurity<=sink.maxImp&&s.avail>0.0001);
            let dirtySrcs=activeSources.filter(s=>s.impurity>sink.maxImp&&s.avail>0.0001);
            if(isPressureEnabled){ cleanSrcs.sort((a,b)=>{let aP=a.pressure>=sink.pressure?1:0,bP=b.pressure>=sink.pressure?1:0; return aP!==bP?bP-aP:b.impurity-a.impurity;}); dirtySrcs.sort((a,b)=>{let aP=a.pressure>=sink.pressure?1:0,bP=b.pressure>=sink.pressure?1:0; return aP!==bP?bP-aP:a.impurity-b.impurity;}); }
            else { cleanSrcs.sort((a,b)=>b.impurity-a.impurity); dirtySrcs.sort((a,b)=>a.impurity-b.impurity); }
            if(cleanSrcs.length>0&&dirtySrcs.length>0){
                let clean=cleanSrcs[0],dirty=dirtySrcs[0];
                if(Math.abs(sink.maxImp-clean.impurity)<0.00001){addConnection(clean,sink,Math.min(clean.avail,sink.needed));continue;}
                let r=(dirty.impurity-sink.maxImp)/(sink.maxImp-clean.impurity);
                let fd=Math.min(dirty.avail,clean.avail/r,sink.needed/(1+r)),fc=fd*r;
                if(fc<0.0001&&fd<0.0001){addConnection(clean,sink,Math.min(clean.avail,sink.needed));continue;}
                addConnection(clean,sink,fc); addConnection(dirty,sink,fd);
            } else if(cleanSrcs.length>0) addConnection(cleanSrcs[0],sink,Math.min(cleanSrcs[0].avail,sink.needed));
            else if(dirtySrcs.length>0) addConnection(dirtySrcs[0],sink,Math.min(dirtySrcs[0].avail,sink.needed));
            else break;
        }
    }
    if(internalPurge>0.001){
        activeSinks.push({id:'purge_node',name: t('str_purge_node'),req:internalPurge,type:'purge',maxImp:'-',pressure:0});
        let purgeSink=activeSinks[activeSinks.length-1];
        for(let src of activeSources) if(src.avail>0.0001) addConnection(src,purgeSink,src.avail);
    }
    return {sources:activeSources, sinks:activeSinks, connections, totalCompPower:totalCompPower_kW};
}

// ── Core Engine Extracted for Reusability ──
function calculateScenarioEconomics(simType = 'default') {
    let freshImp = parseFloat(document.getElementById('fresh_impurity').value);
    let isPurifierEnabled = document.getElementById('enable_purifier').checked;
    let isPressureEnabled = document.getElementById('enable_pressure').checked;
    let opHours = parseFloat(document.getElementById('op_hours').value) || 8000;
    
    let baseResult = runProblemTable(sources, sinks, freshImp);
    let finalFreshTarget = baseResult.minFresh, finalPurgeTarget = baseResult.purgeFlow;
    let activeSources = JSON.parse(JSON.stringify(sources)), activeSinks = JSON.parse(JSON.stringify(sinks));
    let tableResultToDisplay = baseResult;
    let purFeedFlowForCapex = 0;
    
    if(isPurifierEnabled){
        let prodImp = parseFloat(document.getElementById('pur_prod_imp').value) || 0;
        let tailImp = parseFloat(document.getElementById('pur_tail_imp').value) || 0;
        let feedFlow = baseResult.purgeFlow, feedImp = baseResult.purgeImp, prodFlow = 0, tailFlow = feedFlow;
        purFeedFlowForCapex = feedFlow;
        
        if(feedFlow > 0 && tailImp > prodImp){
            if(feedImp <= prodImp){prodFlow = feedFlow; tailFlow = 0;} else if(feedImp >= tailImp){prodFlow = 0; tailFlow = feedFlow;}
            else{prodFlow = feedFlow * ((tailImp - feedImp)/(tailImp - prodImp)); tailFlow = feedFlow - prodFlow;}
        }
        let tempSources = JSON.parse(JSON.stringify(sources)), toRemove = feedFlow;
        let indices = tempSources.map((s,idx)=>({idx,imp:s.impurity})).sort((a,b)=>b.imp-a.imp).map(x=>x.idx);
        for(let i of indices){if(toRemove<=0.0001)break;if(tempSources[i].flow>=toRemove){tempSources[i].flow-=toRemove;toRemove=0;}else{toRemove-=tempSources[i].flow;tempSources[i].flow=0;}}
        tempSources = tempSources.filter(s=>s.flow>0.0001);
        
        let prodPres = parseFloat(document.getElementById('pur_prod_pres').value) || 100;
        let tailPres = parseFloat(document.getElementById('pur_tail_pres').value) || 100;

        if(prodFlow>0) tempSources.push({id:'src_purifier_top',name:t('str_rec_node'),flow:prodFlow,impurity:prodImp,pressure:prodPres,type:'purifier'});
        if(tailFlow>0) tempSources.push({id:'src_purifier_bot',name:t('str_tail_node'),flow:tailFlow,impurity:tailImp,pressure:tailPres,type:'tail'});
        
        let newResult = runProblemTable(tempSources, sinks, freshImp);
        finalFreshTarget = newResult.minFresh; finalPurgeTarget = newResult.purgeFlow;
        tableResultToDisplay = newResult; activeSources = tempSources;
        
        if(simType === 'default') {
            document.getElementById('pur_feed_flow').value = feedFlow.toFixed(2);
            document.getElementById('pur_feed_imp').value = feedImp.toFixed(2);
        }
    }
    
    let networkData = calculateConnections(finalFreshTarget, freshImp, finalPurgeTarget, activeSources, activeSinks, isPressureEnabled);
    let freshCost = parseFloat(document.getElementById('fresh_h2_cost').value) || 0;
    let fuelValue = parseFloat(document.getElementById('fuel_value').value) || 0;
    let elecCost = parseFloat(document.getElementById('elec_cost').value) || 0;
    
    let isDailyUnit = (currentUnit === 'MMSCFD');
    let basisFactor = isDailyUnit ? 24 : 1; 
    let timeBasisFactor = opHours / basisFactor;

    let purCapex = 0; let purMaintAnnual = 0;
    if (isPurifierEnabled && purFeedFlowForCapex > 0) {
        let baseCost = parseFloat(document.getElementById('capex_pur_base_cost').value) || 0;
        let baseCap = parseFloat(document.getElementById('capex_pur_base_cap').value) || 1;
        let scale = parseFloat(document.getElementById('capex_pur_scale').value) || 0.85;
        let opexPercent = (parseFloat(document.getElementById('opex_pur_percent').value) || 0) / 100;
        purCapex = baseCost * Math.pow((purFeedFlowForCapex / baseCap), scale);
        purMaintAnnual = purCapex * opexPercent;
    }
    
    let compPower = networkData.totalCompPower || 0;
    let compCapex = 0; let compMaintAnnual = 0;
    if (isPressureEnabled && compPower > 0) {
        let baseCost = parseFloat(document.getElementById('capex_comp_base_cost').value) || 0;
        let baseCap = parseFloat(document.getElementById('capex_comp_base_cap').value) || 1;
        let scale = parseFloat(document.getElementById('capex_comp_scale').value) || 0.65;
        let opexPercent = (parseFloat(document.getElementById('opex_comp_percent').value) || 0) / 100;
        compCapex = baseCost * Math.pow((compPower / baseCap), scale);
        compMaintAnnual = compCapex * opexPercent;
    }
    
    let totalCapex = purCapex + compCapex;
    let totalMaintAnnual = purMaintAnnual + compMaintAnnual;
    let maintOpexPerBasis = totalMaintAnnual / timeBasisFactor;

    let baseMaterialOpex = (baseResult.minFresh * freshCost) - (baseResult.purgeFlow * fuelValue);
    let finalMaterialOpex = (finalFreshTarget * freshCost) - (finalPurgeTarget * fuelValue);
    let compOpex = compPower * elecCost * basisFactor; 
    let baseOpex = baseMaterialOpex;
    let finalTotalOpex = finalMaterialOpex + compOpex + maintOpexPerBasis;
    
    let savingsBasis = baseOpex - finalTotalOpex; 
    let savingsYr = savingsBasis * timeBasisFactor;
    
    let paybackPeriod = t('str_unfeasible');
    let paybackNum = 9999;
    if (savingsYr > 0 && totalCapex > 0) { paybackNum = totalCapex / savingsYr; paybackPeriod = paybackNum.toFixed(2); } 
    else if (savingsYr > 0 && totalCapex === 0) { paybackNum = 0; paybackPeriod = t('str_immediate'); }

    return {
        tableResultToDisplay, finalFreshTarget, finalPurgeTarget, freshImp, networkData, isPressureEnabled,
        purCapex, compCapex, totalCapex, baseOpex, finalTotalOpex, savingsBasis, savingsYr, paybackPeriod, paybackNum,
        simType
    };
}

// ── Routing Logic (Normal vs Comparative) ──
function triggerRunAnalysis() {
    if(sources.length===0||sinks.length===0){ showToast(t('toast_min_req'),'error'); return; }
    const btn = document.getElementById('mainRunBtn'); btn.classList.add('loading');
    
    const isComparisonEnabled = document.getElementById('enable_comparison').checked;
    const isPurifierEnabled = document.getElementById('enable_purifier').checked;

    setTimeout(() => {
        if (isComparisonEnabled && isPurifierEnabled) {
            runComparativeAnalysis();
        } else {
            document.getElementById('comparison-section').style.display = 'none';
            comparisonData = null;
            document.getElementById('current-tech-badge').textContent = '';
            runSingleAnalysis();
        }
        btn.classList.remove('loading');
    }, 500);
}

function runSingleAnalysis() {
    const results = calculateScenarioEconomics('default');
    lastNetworkData = results.networkData;
    renderResultsToUI(results);
    showToast(t('toast_analysis_done'),'success');
    switchTab('tab-results');
}

function runComparativeAnalysis() {
    const originalType = document.getElementById('purifier_type').value;
    
    document.getElementById('purifier_type').value = 'membrane';
    changePurifierType();
    const memResults = calculateScenarioEconomics('Membrane');

    document.getElementById('purifier_type').value = 'psa';
    changePurifierType();
    const psaResults = calculateScenarioEconomics('PSA');

    document.getElementById('purifier_type').value = originalType;
    changePurifierType();
    const userResults = calculateScenarioEconomics(originalType === 'membrane' ? 'Membrane' : 'PSA');
    
    let winner = null;
    let memScore = (memResults.paybackNum > 0 && memResults.paybackNum < 9999) ? (100 / memResults.paybackNum) : (memResults.savingsYr > 0 ? 0.1 : -1);
    let psaScore = (psaResults.paybackNum > 0 && psaResults.paybackNum < 9999) ? (100 / psaResults.paybackNum) : (psaResults.savingsYr > 0 ? 0.1 : -1);
    
    if (memScore > psaScore) winner = 'Membrane';
    else if (psaScore > memScore) winner = 'PSA';
    else winner = (memResults.savingsYr >= psaResults.savingsYr) ? 'Membrane' : 'PSA'; 

    comparisonData = { memResults, psaResults, winner };

    updateComparisonUI(memResults, psaResults, winner);
    
    lastNetworkData = userResults.networkData;
    renderResultsToUI(userResults);
    document.getElementById('current-tech-badge').textContent = `(${t('str_rec_note')} ${userResults.simType === 'Membrane' ? t('str_mem') : t('str_psa')})`;

    showToast(t('toast_comp_done'),'success');
    switchTab('tab-results');
}

function updateComparisonUI(mem, psa, winner) {
    const section = document.getElementById('comparison-section');
    const table = document.getElementById('comparisonTable');
    const recBox = document.getElementById('recommendationBox');
    
    const isMemWin = winner === 'Membrane';
    const isPsaWin = winner === 'PSA';

    table.innerHTML = `
        <thead>
            <tr>
                <th>${t('str_comp_criteria')}</th>
                <th class="${isMemWin ? 'winner-col' : ''}">${t('str_mem')} ${isMemWin ? '🏆' : ''}</th>
                <th class="${isPsaWin ? 'winner-col' : ''}">${t('str_psa')} ${isPsaWin ? '🏆' : ''}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${t('str_capex')}</td>
                <td class="${isMemWin ? 'winner-col' : ''}">$${mem.totalCapex.toLocaleString('en-US',{maximumFractionDigits:0})}</td>
                <td class="${isPsaWin ? 'winner-col' : ''}">$${psa.totalCapex.toLocaleString('en-US',{maximumFractionDigits:0})}</td>
            </tr>
            <tr>
                <td>${t('str_net_sav')}</td>
                <td class="${isMemWin ? 'winner-col' : ''}" style="color:${mem.savingsYr>0?'var(--green)':'var(--red)'}">$${mem.savingsYr.toLocaleString('en-US',{maximumFractionDigits:0})}</td>
                <td class="${isPsaWin ? 'winner-col' : ''}" style="color:${psa.savingsYr>0?'var(--green)':'var(--red)'}">$${psa.savingsYr.toLocaleString('en-US',{maximumFractionDigits:0})}</td>
            </tr>
            <tr>
                <td>${t('str_payback')}</td>
                <td class="${isMemWin ? 'winner-col' : ''}" style="color:${mem.paybackNum<9999?'var(--green)':'var(--red)'}; font-weight:800;">${mem.paybackPeriod} ${t('str_years')}</td>
                <td class="${isPsaWin ? 'winner-col' : ''}" style="color:${psa.paybackNum<9999?'var(--green)':'var(--red)'}; font-weight:800;">${psa.paybackPeriod} ${t('str_years')}</td>
            </tr>
            <tr>
                <td>${t('str_rec_pur')}</td>
                <td class="${isMemWin ? 'winner-col' : ''}">98.0%</td>
                <td class="${isPsaWin ? 'winner-col' : ''}">99.9%</td>
            </tr>
        </tbody>
    `;

    if (winner) {
        recBox.innerHTML = `
            <i class="fa-solid fa-lightbulb"></i>
            <div>
                <strong style="display:block; margin-bottom:4px; font-size:15px;">${t('str_rec_tech')}${winner === 'Membrane' ? t('str_mem') : t('str_psa')}</strong>
                <p>${t('str_rec_desc')}</p>
            </div>
        `;
    }

    section.style.display = 'block';
}

function renderResultsToUI(res) {
    document.getElementById('res_fresh').textContent = res.finalFreshTarget.toFixed(2);
    document.getElementById('res_purge').textContent = res.finalPurgeTarget.toFixed(2);
    
    let isDailyUnit = (currentUnit === 'MMSCFD');
    let timeLabel = isDailyUnit ? 'day' : 'hr';
    document.querySelectorAll('.time-basis-lbl').forEach(el => el.textContent = timeLabel);

    document.getElementById('res_base_opex').textContent=res.baseOpex.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.getElementById('res_final_h2_opex').textContent=res.finalTotalOpex.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.getElementById('res_save_hr').textContent=Math.abs(res.savingsBasis).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.getElementById('res_save_yr').textContent=Math.abs(res.savingsYr).toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
    
    document.getElementById('res_capex_pur').textContent = res.purCapex.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
    document.getElementById('res_capex_comp').textContent = res.compCapex.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
    document.getElementById('res_capex_total').textContent = res.totalCapex.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
    document.getElementById('res_payback').textContent = res.paybackPeriod;

    const cardSave=document.getElementById('card_save_hr');
    const cardPayback=document.getElementById('card_payback');
    if(res.savingsBasis>=0){
        document.getElementById('res_save_hr_sign').textContent='+';
        document.getElementById('res_save_yr_sign').textContent='+';
        cardSave.className='result-card rc-green';
        cardPayback.style.borderColor = 'var(--green)';
        cardPayback.style.background = 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.2))';
        document.getElementById('res_payback').style.color = 'var(--green)';
    } else {
        document.getElementById('res_save_hr_sign').textContent='-';
        document.getElementById('res_save_yr_sign').textContent='-';
        cardSave.className='result-card rc-red';
        cardPayback.style.borderColor = 'var(--red)';
        cardPayback.style.background = 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(239,68,68,0.2))';
        document.getElementById('res_payback').style.color = 'var(--red)';
    }
    
    renderCascadeTable(res.tableResultToDisplay);
    
    // Store params for possible language switch re-render
    window.lastChartParams = { res: res.tableResultToDisplay, freshTarget: res.finalFreshTarget, freshImp: res.freshImp };
    drawCompositeCurveChart(res.tableResultToDisplay, res.finalFreshTarget, res.freshImp);
    
    drawInteractiveNetwork(res.networkData, res.isPressureEnabled);
    
    document.getElementById('results-hint').style.display='none';
    document.getElementById('results-content').style.display='flex';
    document.getElementById('results-content').style.flexDirection='column';
    ['results','network','curve','table'].forEach(id => {
        document.getElementById(`badge-${id}`).classList.remove('hidden-badge');
        const hint=document.getElementById(`${id}-hint`); const content=document.getElementById(`${id}-content`);
        if(hint) hint.style.display='none'; if(content) content.style.display='block';
    });
}

function renderCascadeTable(res) {
    const tbody=document.getElementById('cascadeBody'); tbody.innerHTML='';
    for(let k=0;k<res.n;k++){
        let isPinch=(k===res.pinchIndex);
        let dn=res.ex_Net[k]!==0?res.ex_Net[k].toFixed(4):'0', df=res.ex_Fc[k]!==0?res.ex_Fc[k].toFixed(4):'0';
        let dm=k<res.n-1?(res.ex_m[k]===0?'0':res.ex_m[k].toFixed(5)):'-', dc=res.ex_cum_m[k]===0?'0':res.ex_cum_m[k].toFixed(5);
        let dfk=res.ex_Ff[k]===0?'0':res.ex_Ff[k].toFixed(4);
        tbody.innerHTML+=`<tr class="${isPinch?'pinch-row':''}"><td>${k+1}</td><td><strong>${res.C[k].toFixed(2)}</strong></td><td>${res.Fsk[k]===0?'0':res.Fsk[k].toFixed(2)}</td><td>${res.Fsr[k]===0?'0':res.Fsr[k].toFixed(2)}</td><td>${dn}</td><td style="color:var(--accent-hi); font-weight:800;">${df}</td><td>${dm}</td><td style="font-weight:800; color:${isPinch?'var(--red)':'var(--green)'}">${dc}</td><td style="color:var(--yellow); font-weight:800;">${dfk}</td></tr>`;
    }
}

let hgccChartInstance=null;
function drawCompositeCurveChart(res, freshTarget, freshImp) {
    const ctx=document.getElementById('pinchChart').getContext('2d');
    if(hgccChartInstance) hgccChartInstance.destroy();
    const rootStyles = getComputedStyle(document.documentElement);
    const textColor = rootStyles.getPropertyValue('--text-2').trim() || '#94a3b8';
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const gridColor = (currentTheme === 'light' || currentTheme === 'green') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)';
    const accent = rootStyles.getPropertyValue('--accent').trim() || '#3b82f6';
    const accentGlow = rootStyles.getPropertyValue('--accent-glow').trim() || 'rgba(59,130,246,0.1)';

    let pts=[]; for(let k=0;k<res.n;k++){ let sh=res.ex_cum_m[k]+freshTarget*((res.C[k]-freshImp)/100); if(Math.abs(sh)<0.001) sh=0; pts.push({x:sh,y:res.C[k]}); }
    hgccChartInstance=new Chart(ctx,{ type:'line', data:{ datasets:[{ label: 'Curve', data:pts, borderColor:accent, backgroundColor:accentGlow, borderWidth:3, fill:true, tension:0.1, pointBackgroundColor:pts.map((_,i)=>i===res.pinchIndex?'#ef4444':accent), pointRadius:pts.map((_,i)=>i===res.pinchIndex?8:5), pointBorderColor:'transparent' }]}, options:{ responsive:true, maintainAspectRatio:false, animation: false, plugins:{ legend:{display:false} }, scales:{ x:{ type:'linear', min:0, grid:{color:gridColor}, ticks:{color:textColor}, title:{display:true,text:`${t('str_surplus')} (${currentUnit})`,color:textColor,font:{weight:'bold', size: 14}} }, y:{ type:'linear', grid:{color:gridColor}, ticks:{color:textColor}, title:{display:true,text:`${t('str_impurity')} (%)`,color:textColor,font:{weight:'bold', size: 14}} } } } });
}

let visNetworkInstance=null;
function drawInteractiveNetwork(data, isPressureEnabled) {
    const container=document.getElementById('mynetwork');
    const rootStyles = getComputedStyle(document.documentElement);
    const accent = rootStyles.getPropertyValue('--accent').trim(), green = rootStyles.getPropertyValue('--green').trim(), orange = rootStyles.getPropertyValue('--orange').trim(), purple = rootStyles.getPropertyValue('--purple').trim(), text2 = rootStyles.getPropertyValue('--text-2').trim(), bgPanel2 = rootStyles.getPropertyValue('--bg-panel2').trim();

    const nodesArray=[];
    data.sources.forEach(src=>{ let bg = accent, pStr=(isPressureEnabled&&src.type!=='fresh')?`\nP: ${src.pressure.toFixed(1)} bar`:''; if(src.type==='fresh') bg = green; else if(src.type==='purifier') bg = purple; else if(src.type==='tail') bg='#d97706'; nodesArray.push({id:src.id, label:`${src.name}\nF: ${src.flow.toFixed(1)}\nC: ${src.impurity.toFixed(1)}%${pStr}`, title:`${t('str_src_node')} ${src.name}`, shape:'box', color:{background:bg, border:bgPanel2}, font:{color:'white',face:'monospace',size:13,multi:true,bold:true}, margin:12, shadow:true, level:0}); });
    data.sinks.forEach(snk=>{ let bg = orange, pStr=(isPressureEnabled&&snk.type!=='purge')?`\nP: ${snk.pressure.toFixed(1)} bar`:''; let labelText=`${snk.name}\nF: ${snk.req.toFixed(1)}\nMax C: ${snk.maxImp}%${pStr}`; if(snk.type==='purge'){bg='#ef4444';labelText=`${snk.name}\nF: ${snk.req.toFixed(1)}`;} nodesArray.push({id:snk.id,label:labelText,title:`${t('str_snk_node')} ${snk.name}`,shape:'box', color:{background:bg,border:bgPanel2},font:{color:'white',face:'monospace',size:13,multi:true,bold:true},margin:12,shadow:true,level:1}); });
    const nodes=new vis.DataSet(nodesArray); const edgesArray=[]; let maxFlow=Math.max(...data.connections.map(c=>c.flow),1);
    data.connections.forEach(conn=>{ let lbl=`${conn.flow.toFixed(1)}`, ec=text2, dash=false, ew=Math.max(1.5,(conn.flow/maxFlow)*8); if(conn.needsCompressor){lbl+=`\n[${conn.compPower.toFixed(1)} kW]`;ec='#ef4444';dash=[5,5];} edgesArray.push({from:conn.sourceId,to:conn.sinkId,label:lbl,arrows:{to:{enabled:true,scaleFactor:1.2}}, color:{color:ec,highlight:accent},width:ew,dashes:dash, font:{align:'horizontal',background:bgPanel2,strokeWidth:0,size:11,face:'monospace',bold:true,color:text2}, smooth:{type:'cubicBezier',forceDirection:'horizontal',roundness:0.4}}); });
    const edges=new vis.DataSet(edgesArray);
    const options={ layout:{hierarchical:{direction: document.documentElement.dir === 'rtl' ? 'RL' : 'LR',sortMethod:'directed',nodeSpacing:120,levelSeparation:450,treeSpacing:150}}, physics:{enabled:true,hierarchicalRepulsion:{centralGravity:0,springLength:200,springConstant:0.01,nodeDistance:150,damping:0.09},solver:'hierarchicalRepulsion'}, interaction:{dragNodes:true,dragView:true,zoomView:true,hover:true}, background:'transparent' };
    
    if(visNetworkInstance!==null) visNetworkInstance.destroy();
    visNetworkInstance=new vis.Network(container,{nodes,edges},options);
    visNetworkInstance.on('stabilizationIterationsDone',() => { visNetworkInstance.setOptions({physics:false}); });
}

function zoomNetwork(step) { if (!visNetworkInstance) return; const currentScale = visNetworkInstance.getScale(); const newScale = Math.max(0.1, currentScale + step); visNetworkInstance.moveTo({ scale: newScale, animation: { duration: 300, easingFunction: "easeInOutQuad" } }); }
function fitNetwork() { if (!visNetworkInstance) return; visNetworkInstance.fit({ animation: { duration: 500, easingFunction: "easeInOutQuad" } }); }

// ── Reports & PDF generation ──────────────────────────────────────────────────
function buildReportHTML() {
    if(document.getElementById('badge-results').classList.contains('hidden-badge')){ showToast(t('toast_pdf_req'), 'warning'); return false; }

    const container = document.getElementById('print-container'); container.innerHTML = ''; 

    const freshTarget = document.getElementById('res_fresh').innerText;
    const totalCapex = document.getElementById('res_capex_total').innerText;
    const finalOpex = document.getElementById('res_final_h2_opex').innerText;
    const netSave = document.getElementById('res_save_hr').innerText;
    const saveSign = document.getElementById('res_save_hr_sign').innerText;
    const isProfitable = saveSign.includes('+');
    const payback = document.getElementById('res_payback').innerText;
    const techBadge = document.getElementById('current-tech-badge').innerText;

    let chartImgStr = ''; const chartCanvas = document.getElementById('pinchChart'); if (chartCanvas && chartCanvas.width > 10) chartImgStr = chartCanvas.toDataURL('image/png');
    let netImgStr = ''; const netCanvas = document.querySelector('#mynetwork canvas'); if (netCanvas && netCanvas.width > 10) netImgStr = netCanvas.toDataURL('image/png');

    const reportTitle = projectMeta.projectName ? projectMeta.projectName : t('pdf_main_title');
    let metaHtml = `
        <div class="pr-header">
            <div style="flex: 1;">
                <span class="pr-title">${t('pdf_main_title')}</span>
                <span class="pr-subtitle">${reportTitle}</span>
                <div class="pr-meta-info">
                    ${projectMeta.companyName ? `<div><strong>${t('pdf_company')}</strong> ${projectMeta.companyName}</div>` : ''}
                    ${projectMeta.engineerName ? `<div><strong>${t('pdf_engineer')}</strong> ${projectMeta.engineerName}</div>` : ''}
                    <div><strong>${t('pdf_date')}</strong> ${new Date().toLocaleDateString('en-GB')}</div>
                </div>
            </div>
            ${projectMeta.logoBase64 ? `<div class="pr-logo-box"><img src="${projectMeta.logoBase64}"></div>` : ''}
        </div>
    `;

    // 1. Comparison Section (If applicable)
    let compHtml = '';
    if (comparisonData && comparisonData.winner) {
        const mem = comparisonData.memResults;
        const psa = comparisonData.psaResults;
        const winner = comparisonData.winner;
        const isMem = winner === 'Membrane';
        const isPsa = winner === 'PSA';
        
        compHtml = `
        <div class="pr-section">
            <div class="pr-sec-title-container">
                <span class="pr-sec-title-main">${t('pdf_sec_1_ar')}</span>
                <span dir="ltr" class="pr-sec-title-sub">${t('pdf_sec_1_en')}</span>
            </div>
            <table class="pr-comparison-table">
                <thead>
                    <tr>
                        <th>${t('str_comp_criteria')}</th>
                        <th class="${isMem ? 'winner-col' : ''}">${t('str_mem')}</th>
                        <th class="${isPsa ? 'winner-col' : ''}">${t('str_psa')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${t('str_capex')}</td>
                        <td class="${isMem ? 'winner-col' : ''}">$${mem.totalCapex.toLocaleString('en-US',{maximumFractionDigits:0})}</td>
                        <td class="${isPsa ? 'winner-col' : ''}">$${psa.totalCapex.toLocaleString('en-US',{maximumFractionDigits:0})}</td>
                    </tr>
                    <tr>
                        <td>${t('str_net_sav')}</td>
                        <td class="${isMem ? 'winner-col' : ''}">$${mem.savingsYr.toLocaleString('en-US',{maximumFractionDigits:0})}</td>
                        <td class="${isPsa ? 'winner-col' : ''}">$${psa.savingsYr.toLocaleString('en-US',{maximumFractionDigits:0})}</td>
                    </tr>
                    <tr>
                        <td>${t('str_payback')}</td>
                        <td class="${isMem ? 'winner-col' : ''}">${mem.paybackPeriod} ${t('str_years')}</td>
                        <td class="${isPsa ? 'winner-col' : ''}">${psa.paybackPeriod} ${t('str_years')}</td>
                    </tr>
                </tbody>
            </table>
            <div class="pr-recommendation">
                <div style="font-size: 24px;">💡</div>
                <div>
                    <strong style="display:block; margin-bottom: 5px;">${t('str_rec_tech')} ${winner === 'Membrane' ? t('str_mem') : t('str_psa')}</strong>
                    ${t('str_rec_desc')} 
                    <i>(${t('str_rec_note')} ${document.getElementById('purifier_type').options[document.getElementById('purifier_type').selectedIndex].text})</i>
                </div>
            </div>
        </div>
        `;
    }

    // 2. Main Executive Summary
    let execTitleNum = comparisonData ? "2" : "1";
    let html = metaHtml + compHtml + `
        <div class="pr-section ${comparisonData ? 'print-page-break' : ''}">
            <div class="pr-sec-title-container">
                <span class="pr-sec-title-main">${execTitleNum}. ${t('pdf_sec_exec_ar')} ${techBadge}</span>
                <span dir="ltr" class="pr-sec-title-sub">${t('pdf_sec_exec_en')}</span>
            </div>
            <div class="pr-grid">
                <div class="pr-card"><span class="pr-card-lbl">${t('pdf_card_fresh')}</span><span class="pr-card-val">${freshTarget} <span class="pr-unit">${currentUnit}</span></span></div>
                <div class="pr-card"><span class="pr-card-lbl">${t('pdf_card_capex')}</span><span class="pr-card-val" style="color: #8b5cf6;">$${totalCapex}</span></div>
                <div class="pr-card"><span class="pr-card-lbl">${t('pdf_card_new_op')}</span><span class="pr-card-val">$${finalOpex} <span class="pr-unit">/hr</span></span></div>
                <div class="pr-card"><span class="pr-card-lbl">${t('pdf_card_sav')}</span><span class="pr-card-val ${isProfitable ? 'green' : 'red'}">${saveSign}$${netSave} <span class="pr-unit">/hr</span></span></div>
                <div class="pr-card" style="width: 100%; text-align: center; background: ${isProfitable?'#f0fdf4':'#fef2f2'}; border-color: ${isProfitable?'#86efac':'#fca5a5'};">
                    <span class="pr-card-lbl">${t('pdf_card_pb')}</span>
                    <span class="pr-card-val ${isProfitable ? 'green' : 'red'}" style="font-size: 28px;">${payback} <span class="pr-unit">${t('str_years')}</span></span>
                </div>
            </div>
        </div>
    `;

    let num = parseInt(execTitleNum) + 1;
    if (netImgStr) html += `<div class="pr-section print-page-break"><div class="pr-sec-title-container"><span class="pr-sec-title-main">${num++}. ${t('pdf_sec_net_ar')}</span><span dir="ltr" class="pr-sec-title-sub">${t('pdf_sec_net_en')}</span></div><div class="pr-img-container"><img src="${netImgStr}"></div></div>`;
    if (chartImgStr) html += `<div class="pr-section print-page-break"><div class="pr-sec-title-container"><span class="pr-sec-title-main">${num++}. ${t('pdf_sec_curve_ar')}</span><span dir="ltr" class="pr-sec-title-sub">${t('pdf_sec_curve_en')}</span></div><div class="pr-img-container"><img src="${chartImgStr}"></div></div>`;

    const tableBodyHtml = document.getElementById('cascadeBody').innerHTML;
    html += `
        <div class="pr-section print-page-break">
            <div class="pr-sec-title-container"><span class="pr-sec-title-main">${num++}. ${t('pdf_sec_table_ar')}</span><span dir="ltr" class="pr-sec-title-sub">${t('pdf_sec_table_en')}</span></div>
            <table class="pr-table"><thead><tr><th>K</th><th>Ck (%)</th><th>Fsk</th><th>Fsr</th><th>Fsr − Fsk</th><th>Fc.k</th><th>m</th><th>cum m</th><th>Ff.k</th></tr></thead><tbody>${tableBodyHtml.replace(/var\(--[^\)]+\)/g, '#000')}</tbody></table>
        </div>
    `;

    if (projectMeta.notes && projectMeta.notes.trim() !== '') {
        html += `<div class="pr-section print-page-break"><div class="pr-sec-title-container"><span class="pr-sec-title-main">${num++}. ${t('pdf_sec_notes_ar')}</span><span dir="ltr" class="pr-sec-title-sub">${t('pdf_sec_notes_en')}</span></div><div class="pr-notes-box">${projectMeta.notes}</div></div>`;
    }

    html += `<div style="height: 60px; width: 100%; display: block; clear: both;"></div>`;
    container.innerHTML = html;
    
    const pinchRows = container.querySelectorAll('.pinch-row');
    pinchRows.forEach(row => { row.className = 'pinch'; });

    return true;
}

function handlePrintAction() { if(buildReportHTML()) window.print(); }

function handlePDFAction() {
    if(!buildReportHTML()) return;
    showToast(t('toast_pdf_gen'),'info');
    const element = document.getElementById('print-container'); element.style.display = 'block';

    setTimeout(() => {
        const pName = projectMeta.projectName ? projectMeta.projectName.replace(/\s+/g, '_') : 'H2_Pinch';
        const opt = { margin: [10, 10, 10, 10], filename: pName + '_Report.pdf', image: { type: 'jpeg', quality: 0.98 }, pagebreak: { mode: ['css', 'legacy'], before: '.print-page-break' }, html2canvas: { scale: 2, useCORS: true, logging: false, letterRendering: true, windowWidth: 800 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };
        html2pdf().set(opt).from(element).save().then(() => { element.style.display = 'none'; showToast(t('toast_pdf_done'),'success'); }).catch((err) => { console.error(err); element.style.display = 'none'; showToast(t('toast_pdf_err'),'error'); });
    }, 500);
}

// initialization
updateUnitLabels(); renderTables();

