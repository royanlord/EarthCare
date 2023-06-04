export const ContactForm = () => {
    return (
        <>
            <section id="content-form">
                <div class="container-fluid mx-auto mt-5 pt-5 pb-5 rounded-5">
                    <div class="row my-5">
                        <div class="col-lg-6 col-md-12 px-5 text-center text-lg-start">
                            <h5 class="text-white fw-medium">Questions, Comments, Concerns?</h5>
                            <h1 class="text-white fw-medium display-3">We&rsquo;d love to <span id="hear">hear</span> from you!</h1>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <form name="contact-form" class="contact-form text-white pe-lg-5">
                                <div class="mb-2">
                                    <label htmlFor="email" class="form-label">Email</label>
                                    <input type="email" class="form-control form-control-lg" id="email" placeholder="Masukkan email" />
                                    <div class="mt-1 text-warning" id="invalid-email"></div>
                                </div>
                                <div class="mb-2">
                                    <label htmlFor="fullname" class="form-label">Full Name</label>
                                    <input type="text" class="form-control form-control-lg" id="fullname"
                                    placeholder="Masukkan nama lengkap" />
                                    <div class="mt-1 text-warning" id="invalid-fullname"></div>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="message" class="form-label">Message</label>
                                    <textarea class="form-control form-control-lg" id="message" rows="6" style={{resize: "none"}}
                                    placeholder="Tulis pertanyaan"></textarea>
                                    <div class="mt-1 text-warning" id="invalid-message"></div>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" id="btnSend" class="btn btn-lg w-100 btn-primary border-0">Send Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 