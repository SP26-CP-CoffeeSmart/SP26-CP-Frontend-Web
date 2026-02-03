import { useParams } from 'react-router-dom';

export function FeedbackPage() {
    const { id } = useParams<{ id: string }>();
    const feedbackId = id ?? '1';

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#1b140d] dark:text-gray-100 min-h-screen w-full overflow-x-hidden transition-colors duration-200">
            <div className="relative flex min-h-screen w-full flex-col">
                <header className="w-full bg-white dark:bg-[#1a120b] border-b border-[#e7dbcf] dark:border-[#3a2c22] sticky top-0 z-50">
                    <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">local_cafe</span>
                            <h1 className="text-xl font-bold tracking-tight">Bean &amp; Brew</h1>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Feedback Form #{feedbackId}</div>
                    </div>
                </header>

                <main className="flex-grow w-full max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                    <div className="flex flex-col gap-2 mb-8">
                        <h2 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#1b140d] dark:text-white">
                            Coffee Drink Feedback
                        </h2>
                        <p className="text-[#9a734c] dark:text-[#c49a6c] text-lg font-normal">
                            We value your opinion! Tell us about your recent brew to help us improve.
                        </p>
                    </div>

                    {/* Drink Information */}
                    <section className="bg-white dark:bg-[#1a120b] rounded-xl shadow-sm border border-[#e7dbcf] dark:border-[#3a2c22] p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">info</span>
                            <h3 className="text-xl font-bold">Drink Information</h3>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                Search for your drink
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9a734c]">
                                    <span className="material-symbols-outlined text-2xl">search</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="e.g., Mocha, Latte, Americano..."
                                    className="block w-full pl-10 pr-3 py-3 border-none rounded-lg bg-[#f3ede7] dark:bg-[#2c2016] text-[#1b140d] dark:text-white placeholder-[#9a734c] focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {/* Latte */}
                            <label className="cursor-pointer group">
                                <input defaultChecked className="peer sr-only" name="drink_type" type="radio" />
                                <div className="flex flex-col gap-3 pb-3 p-3 rounded-xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-gray-50 dark:hover:bg-[#2c2016] transition-all">
                                    <div className="w-full aspect-square bg-center bg-cover rounded-lg overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            data-alt="Latte art heart shape in white cup"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVzZS9IjcSAw4o2Xmd5dO5-iTjx_ztFrne56H-Hn_9OPHcTlDQkaKFF1lxXDgyM7dZyCY3_pBA-of-PJSxlw5H5irCy69OQkdcB0_OLDBk8y7iEtwTTGWQidBXWdLcWzbxYfz0YzVETp-lj3vbX8hVBYThGaSfTP4j3O6qyKHjQ77fp4b5IZo6Z2_k1W-hrddWxvnnK8_a7BNhmwmBynw3pKWsjiT4iWRq85QK9iBStVZ4AqZucwRHUY2h0LV-Lu5uq5bx3_pFZdk')",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[#1b140d] dark:text-white text-base font-bold leading-normal">Latte</p>
                                        <p className="text-[#9a734c] text-sm font-normal leading-normal">Steamed milk</p>
                                    </div>
                                </div>
                            </label>

                            {/* Cappuccino */}
                            <label className="cursor-pointer group">
                                <input className="peer sr-only" name="drink_type" type="radio" />
                                <div className="flex flex-col gap-3 pb-3 p-3 rounded-xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-gray-50 dark:hover:bg-[#2c2016] transition-all">
                                    <div className="w-full aspect-square bg-center bg-cover rounded-lg overflow-hidden relative">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            data-alt="Cappuccino with cocoa powder dusting"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAe36Cj3a1paPFOkgrVhMeegFUo_mX7GQZ5Ij0j1bfTiYYkjK8Jomm0HbPLdyD0MQkwt02oZfO1YkSSiiAfP93PHZATeeaAAocM7doshSypTFxVf7-hjmTCrEosszxIfbmTR7b9JOnQD4EdnAjau96LfKN00_eNWAzNzLQC2zo85DP_9G-xVJdd18LsRe0eDUMPssX2b28uVwoHUxcxlMjrxsiQA5JSHxDwPRtDW6Nf89hC-wRQicTrpWBPNIPUPbbukv2vKgBJ5oA')",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[#1b140d] dark:text-white text-base font-bold leading-normal">Cappuccino</p>
                                        <p className="text-[#9a734c] text-sm font-normal leading-normal">Foamy delight</p>
                                    </div>
                                </div>
                            </label>

                            {/* Cold Brew */}
                            <label className="cursor-pointer group">
                                <input className="peer sr-only" name="drink_type" type="radio" />
                                <div className="flex flex-col gap-3 pb-3 p-3 rounded-xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-gray-50 dark:hover:bg-[#2c2016] transition-all">
                                    <div className="w-full aspect-square bg-center bg-cover rounded-lg overflow-hidden relative">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            data-alt="Iced cold brew coffee in glass with ice"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBna9tcJQAaUO9NG8nFo1HD3Xysd-EipQmAn-3f1se3bFpw_ynjMVgoCvn9vlOFSf-oXopNOrQqFBbIpQjdtYXl3MHJqpAUFerVUt0CrPy9m-W8Eos91fTRrvRFNDgAjPcrYbbBCHuSei0PuPgRmTECJc4j9KUv_bjSf-rzrRYMIDBWbZLIbw7NNA8ZNiyAW-W54vQa5w529-2mIT3-iAfOc4u53VWDRhfnWq81hZvW25lrPZicyGkI0O7eDBs7n4r_LkjfaeooOL8')",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[#1b140d] dark:text-white text-base font-bold leading-normal">Cold Brew</p>
                                        <p className="text-[#9a734c] text-sm font-normal leading-normal">Chilled brew</p>
                                    </div>
                                </div>
                            </label>

                            {/* Espresso */}
                            <label className="cursor-pointer group">
                                <input className="peer sr-only" name="drink_type" type="radio" />
                                <div className="flex flex-col gap-3 pb-3 p-3 rounded-xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-gray-50 dark:hover:bg-[#2c2016] transition-all">
                                    <div className="w-full aspect-square bg-center bg-cover rounded-lg overflow-hidden relative">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            data-alt="Single shot of dark espresso in small cup"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB10PlWzU2sGr_vczG4kdQjNm27_a18zjipYDQ7X8ypGvkAhg93NKLVKF0EMEtsFdYQZFVzFFKL3c1p2TWqoAy2zXkySw--GopEN6bWxfVCNPgIOWg_y5eH2_SCZry93I3fX4TmyAIyJC6dc_ZKo3HLGiozWgU-9ZCWIWenqkBPZe3gvtgRbq9PYndiT3Wyd_Pi784cMLpxUyd-AT_jUg-z0z1Sar4XUVEYq9UzTNlVyxuPWbLvIoCl1arS0Gp92qXirh2YoRoUtDQ')",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[#1b140d] dark:text-white text-base font-bold leading-normal">Espresso</p>
                                        <p className="text-[#9a734c] text-sm font-normal leading-normal">Strong shot</p>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#fcfaf8] dark:bg-[#2c2016] rounded-lg">
                            <span className="text-base font-medium text-[#1b140d] dark:text-white">
                                Is this your first time trying this drink?
                            </span>
                            <div className="flex gap-2">
                                <label className="has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary cursor-pointer border border-[#e7dbcf] dark:border-[#4a3b2f] bg-white dark:bg-[#1a120b] px-6 py-2 rounded-lg transition-colors font-medium text-sm">
                                    Yes
                                    <input className="sr-only" name="first_time" type="radio" value="yes" />
                                </label>
                                <label className="has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary cursor-pointer border border-[#e7dbcf] dark:border-[#4a3b2f] bg-white dark:bg-[#1a120b] px-6 py-2 rounded-lg transition-colors font-medium text-sm">
                                    No
                                    <input className="sr-only" name="first_time" type="radio" value="no" />
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Remaining sections copied from template */}
                    {/* Overall Rating */}
                    <section className="bg-white dark:bg-[#1a120b] rounded-xl shadow-sm border border-[#e7dbcf] dark:border-[#3a2c22] p-6 sm:p-8 text-center">
                        <h3 className="text-xl font-bold mb-2">Overall Rating</h3>
                        <p className="text-[#9a734c] mb-6">How was your experience overall?</p>
                        <div className="flex justify-center flex-row-reverse gap-2 group/rating">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <span
                                    key={star}
                                    className="material-symbols-outlined text-4xl text-[#e7dbcf] cursor-pointer hover:text-primary transition-colors"
                                >
                                    star
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Taste Profile */}
                    <section className="bg-white dark:bg-[#1a120b] rounded-xl shadow-sm border border-[#e7dbcf] dark:border-[#3a2c22] p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">psychiatry</span>
                            <h3 className="text-xl font-bold">Taste Profile</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-3">Strength</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="strength" type="radio" value="light" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Light
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="strength" type="radio" value="medium" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Medium
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="strength" type="radio" value="strong" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Strong
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-3">Acidity</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="acidity" type="radio" value="low" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Low
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="acidity" type="radio" value="medium" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Medium
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="acidity" type="radio" value="high" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            High
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-3">Bitterness</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="bitterness" type="radio" value="low" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Low
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="bitterness" type="radio" value="medium" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Medium
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="bitterness" type="radio" value="high" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            High
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-3">Sweetness</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="sweetness" type="radio" value="not_sweet" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Not sweet
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="sweetness" type="radio" value="medium" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Medium
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="sweetness" type="radio" value="sweet" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Sweet
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Menu Clarity & Usability */}
                    <section className="bg-white dark:bg-[#1a120b] rounded-xl shadow-sm border border-[#e7dbcf] dark:border-[#3a2c22] p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">menu_book</span>
                            <h3 className="text-xl font-bold">Menu Clarity &amp; Usability</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-3">Drink Name Readability</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="name_readability" type="radio" value="confusing" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Confusing
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="name_readability" type="radio" value="clear" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Clear
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="name_readability" type="radio" value="very_clear" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Very Clear
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-3">Description vs. Actual Taste</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="description_accuracy" type="radio" value="inaccurate" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Inaccurate
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input
                                            className="peer sr-only"
                                            name="description_accuracy"
                                            type="radio"
                                            value="somewhat_accurate"
                                        />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Mostly Match
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="description_accuracy" type="radio" value="accurate" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Perfect Match
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-3">Menu Layout Clarity</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="layout_clarity" type="radio" value="cluttered" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Cluttered
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="layout_clarity" type="radio" value="organized" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Organized
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="layout_clarity" type="radio" value="intuitive" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Intuitive
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-3">First-Time Ordering Ease</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="ordering_ease" type="radio" value="difficult" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Difficult
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="ordering_ease" type="radio" value="average" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Average
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="ordering_ease" type="radio" value="easy" />
                                        <div className="text-center py-2 px-3 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] text-sm font-medium text-gray-600 dark:text-gray-300 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all">
                                            Easy
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Price & Value */}
                    <section className="bg-white dark:bg-[#1a120b] rounded-xl shadow-sm border border-[#e7dbcf] dark:border-[#3a2c22] p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">payments</span>
                            <h3 className="text-xl font-bold">Price &amp; Value</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-semibold mb-3">How was the price?</label>
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center gap-3 p-3 border border-[#e7dbcf] dark:border-[#3a2c22] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2c2016] transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                        <input className="accent-primary w-4 h-4 text-primary" name="price_perception" type="radio" value="cheap" />
                                        <span className="text-sm font-medium">Cheap</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 border border-[#e7dbcf] dark:border-[#3a2c22] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2c2016] transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                        <input className="accent-primary w-4 h-4 text-primary" name="price_perception" type="radio" value="reasonable" />
                                        <span className="text-sm font-medium">Reasonable</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 border border-[#e7dbcf] dark:border-[#3a2c22] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2c2016] transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                        <input className="accent-primary w-4 h-4 text-primary" name="price_perception" type="radio" value="bit_expensive" />
                                        <span className="text-sm font-medium">A bit expensive</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 border border-[#e7dbcf] dark:border-[#3a2c22] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2c2016] transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                        <input className="accent-primary w-4 h-4 text-primary" name="price_perception" type="radio" value="too_expensive" />
                                        <span className="text-sm font-medium">Too expensive</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <label className="block text-sm font-semibold mb-3">Would you buy it again at this price?</label>
                                <div className="flex gap-4">
                                    <label className="flex-1 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary cursor-pointer border border-[#e7dbcf] dark:border-[#4a3b2f] bg-[#fcfaf8] dark:bg-[#2c2016] py-4 rounded-xl transition-all font-medium text-center shadow-sm">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined">thumb_up</span>
                                            <span>Yes</span>
                                        </div>
                                        <input className="sr-only" name="buy_again" type="radio" value="yes" />
                                    </label>
                                    <label className="flex-1 has-[:checked]:bg-red-500 has-[:checked]:text-white has-[:checked]:border-red-500 cursor-pointer border border-[#e7dbcf] dark:border-[#4a3b2f] bg-[#fcfaf8] dark:bg-[#2c2016] py-4 rounded-xl transition-all font-medium text-center shadow-sm">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined">thumb_down</span>
                                            <span>No</span>
                                        </div>
                                        <input className="sr-only" name="buy_again" type="radio" value="no" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Repurchase Intent */}
                    <section className="bg-white dark:bg-[#1a120b] rounded-xl shadow-sm border border-[#e7dbcf] dark:border-[#3a2c22] p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">favorite</span>
                            <h3 className="text-xl font-bold">Repurchase Intent</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-dashed border-[#e7dbcf] dark:border-[#3a2c22] pb-6">
                                <span className="font-medium text-base">Will you order this drink again?</span>
                                <div className="flex gap-2">
                                    <label className="cursor-pointer group">
                                        <input className="peer sr-only" name="order_again" type="radio" value="yes" />
                                        <span className="px-5 py-2 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300 dark:peer-checked:bg-green-900 dark:peer-checked:text-green-100 font-medium text-sm block transition-all">
                                            Yes
                                        </span>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="peer sr-only" name="order_again" type="radio" value="maybe" />
                                        <span className="px-5 py-2 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] peer-checked:bg-yellow-100 peer-checked:text-yellow-800 peer-checked:border-yellow-300 dark:peer-checked:bg-yellow-900 dark:peer-checked:text-yellow-100 font-medium text-sm block transition-all">
                                            Maybe
                                        </span>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="peer sr-only" name="order_again" type="radio" value="no" />
                                        <span className="px-5 py-2 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] peer-checked:bg-red-100 peer-checked:text-red-800 peer-checked:border-red-300 dark:peer-checked:bg-red-900 dark:peer-checked:text-red-100 font-medium text-sm block transition-all">
                                            No
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="font-medium text-base">Would you recommend it to a friend?</span>
                                <div className="flex gap-2">
                                    <label className="cursor-pointer group">
                                        <input className="peer sr-only" name="recommend" type="radio" value="yes" />
                                        <span className="px-5 py-2 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300 dark:peer-checked:bg-green-900 dark:peer-checked:text-green-100 font-medium text-sm block transition-all">
                                            Yes
                                        </span>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="peer sr-only" name="recommend" type="radio" value="no" />
                                        <span className="px-5 py-2 rounded-lg border border-[#e7dbcf] dark:border-[#3a2c22] peer-checked:bg-red-100 peer-checked:text-red-800 peer-checked:border-red-300 dark:peer-checked:bg-red-900 dark:peer-checked:text-red-100 font-medium text-sm block transition-all">
                                            No
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Optional Feedback & Submit */}
                    <section className="bg-white dark:bg-[#1a120b] rounded-xl shadow-sm border border-[#e7dbcf] dark:border-[#3a2c22] p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">edit_note</span>
                            <h3 className="text-xl font-bold">Optional Feedback</h3>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-3">Areas for improvement (Check all that apply)</label>
                            <div className="flex flex-wrap gap-3">
                                {['Taste', 'Price', 'Aftertaste', 'Milk / Ice Ratio', 'Temperature', 'Presentation'].map((item) => (
                                    <label key={item} className="cursor-pointer select-none">
                                        <input className="peer sr-only" type="checkbox" />
                                        <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#e7dbcf] dark:border-[#3a2c22] bg-[#fcfaf8] dark:bg-[#2c2016] text-sm text-gray-700 dark:text-gray-300 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-colors">
                                            {item}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2" htmlFor="other_feedback">
                                Other comments
                            </label>
                            <textarea
                                id="other_feedback"
                                rows={4}
                                placeholder="Tell us more about what you liked or disliked..."
                                className="w-full rounded-lg bg-[#f3ede7] dark:bg-[#2c2016] border-none focus:ring-2 focus:ring-primary placeholder-[#9a734c] text-[#1b140d] dark:text-white p-4 resize-none transition-shadow"
                            />
                        </div>
                    </section>

                    <div className="flex flex-col items-center gap-6 py-4">
                        <p className="text-[#9a734c] text-sm">Thank you for helping us make our coffee better!</p>
                        <button className="w-full sm:w-auto bg-primary text-white font-bold py-4 px-12 rounded-full hover:bg-[#b8610b] active:scale-95 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                            <span>Submit Feedback</span>
                            <span className="material-symbols-outlined text-xl">send</span>
                        </button>
                    </div>
                </main>

                <footer className="w-full py-8 text-center text-[#9a734c] text-sm dark:text-[#6a5342]">
                    © 2023 Bean &amp; Brew Co.
                </footer>
            </div>
        </div>
    );
}
