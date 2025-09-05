import { Typography } from "@/components/ui/typography";

export default function Imprint() {
  return (
    <div>
      <h1>Imprint</h1>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <Typography as="h1" variant="3xl/semibold" className="text-center">
          Imprint
        </Typography>

        <section className="space-y-6">
          <Typography as="h2" variant="2xl/semibold">
            According to § 5 TMG
          </Typography>
          <Typography variant="base/normal">
            <strong>MSC Moroccan Solar Cells</strong>
          </Typography>
          <Typography variant="base/normal">
            43. Rue Aguelmane Sidi Ali Agdal
          </Typography>
          <Typography variant="base/normal">10090 Rabat</Typography>
          <Typography variant="base/normal">Morocco</Typography>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="2xl/semibold">
            Represented by:
          </Typography>
          <Typography variant="base/normal">Ahmed Jaafar</Typography>
          <Typography variant="base/normal">Dr. Dirk Habermann</Typography>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="2xl/semibold">
            Contact
          </Typography>
          <Typography variant="base/normal">
            <strong>Phone:</strong> +212 653 660 720
          </Typography>
          <Typography variant="base/normal">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@moroccan-solar-cells.com"
              className="text-blue-500"
            >
              info@moroccan-solar-cells.com
            </a>
          </Typography>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="2xl/semibold">
            Tax ID
          </Typography>
          <Typography variant="base/normal">
            <strong>VAT identification number:</strong> 003615475000065
          </Typography>
          <Typography variant="base/normal">
            <strong>Tax identification number:</strong> 66125701
          </Typography>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="2xl/semibold">
            Commercial Register
          </Typography>
          <Typography variant="base/normal">
            Commercial register number: 181763
          </Typography>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="2xl/semibold">
            Consumer dispute resolution / universal arbitration board
          </Typography>
          <Typography variant="base/normal">
            We are not willing or obliged to take part in dispute resolution
            proceedings before a consumer arbitration board.
          </Typography>
        </section>
      </div>
      {/*
Imprint
According to § 5 TMG

MSC Moroccan Solar Cells

43. Rue Aguelmane Sidi Ali Agdal

10090 Rabat

Morocco



Represented by:

Ahmed Jaafar
Dr. Dirk Habermann
Contact

Phone: +212 653 660 720
Email: info@moroccan-solar-cells.com
Tax ID

VAT identification number: 003615475000065

Tax identification number: 66125701

Commercial register number: 181763
Consumer dispute resolution / universal arbitration board

We are not willing or obliged to take part in dispute resolution proceedings before a consumer arbitration board. */}
    </div>
  );
}
