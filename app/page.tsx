import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, Clock, Copy, ExternalLink, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      {/* Market Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        <MarketIndicator name="Merval" value="2.273.567,99" change={-4.9} flag="🇦🇷" />
        <MarketIndicator name="Merval USD" value="1.918,17" change={-5.1} flag="🇦🇷" />
        <MarketIndicator name="Riesgo País" value="710" change={4.87} flag="🇦🇷" />
        <MarketIndicator name="Dow Jones" value="446,11" change={0.3} flag="🇺🇸" showBuy />
        <MarketIndicator name="Nasdaq 100" value="527,99" change={-0.24} flag="🇺🇸" showBuy />
        <MarketIndicator name="S&P 500" value="605,31" change={0.08} flag="🇺🇸" showBuy />
      </div>

      <Tabs defaultValue="dolar" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-[600px] lg:mx-auto mb-6">
          <TabsTrigger value="dolar">Dólar</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="commodities">Commodities</TabsTrigger>
          <TabsTrigger value="acciones">Acciones</TabsTrigger>
        </TabsList>

        <TabsContent value="dolar">
          <h2 className="text-3xl font-bold text-center mb-2 text-emerald-400">Cotización del dolar HOY</h2>
          <p className="text-center text-gray-400 mb-8">
            Cotización del dolar, actualizada automáticamente cada 5 minutos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ExchangeRateCard
              title="DOLAR OFICIAL"
              buyPrice="1.076"
              sellPrice="1.036"
              spread="$40"
              lastUpdate="Hace una hora"
              change={0}
            />
            <ExchangeRateCard
              title="DOLAR BLUE"
              buyPrice="1.210"
              sellPrice="1.190"
              spread="$20"
              lastUpdate="Hace 41 minutos"
              change={0.41}
              variant="highlight"
            />
            <ExchangeRateCard
              title="DOLAR TARJETA"
              buyPrice="1.398,80"
              sellPrice="1.398,80"
              reference
              lastUpdate="Hace una hora"
              change={0}
            />
            <ExchangeRateCard
              title="DOLAR MEP"
              buyPrice="1.181,51"
              sellPrice="1.181,51"
              spread="$35"
              lastUpdate="Hace 3 horas"
              change={-0.09}
            />
            <ExchangeRateCard
              title="DOLAR CCL"
              buyPrice="1.190,37"
              sellPrice="1.190,37"
              spread="$38"
              lastUpdate="Hace 3 horas"
              change={-0.29}
            />
            <ExchangeRateCard
              title="DOLAR CRIPTO"
              buyPrice="1.202,20"
              sellPrice="1.199,37"
              spread="$2,83"
              lastUpdate="Hace 41 minutos"
              change={-0.4}
            />
          </div>
        </TabsContent>

        <TabsContent value="crypto">
          <h2 className="text-3xl font-bold text-center mb-2 text-emerald-400">Criptomonedas</h2>
          <p className="text-center text-gray-400 mb-8">Cotizaciones actualizadas en tiempo real</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ExchangeRateCard
              title="BITCOIN"
              buyPrice="48.235,60"
              sellPrice="48.150,20"
              spread="$85,40"
              lastUpdate="Hace 1 minuto"
              change={2.34}
              showUSD
            />
            <ExchangeRateCard
              title="ETHEREUM"
              buyPrice="2.485,75"
              sellPrice="2.480,30"
              spread="$5,45"
              lastUpdate="Hace 1 minuto"
              change={1.56}
              showUSD
            />
            <ExchangeRateCard
              title="USDT"
              buyPrice="1.076"
              sellPrice="1.074"
              spread="$2"
              lastUpdate="Hace 1 minuto"
              change={0.05}
              showUSD
            />
          </div>
        </TabsContent>

        <TabsContent value="commodities">
          <h2 className="text-3xl font-bold text-center mb-2 text-emerald-400">Commodities</h2>
          <p className="text-center text-gray-400 mb-8">Precios internacionales de materias primas</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ExchangeRateCard
              title="ORO"
              buyPrice="2.035,40"
              sellPrice="2.034,80"
              spread="$0,60"
              lastUpdate="Hace 5 minutos"
              change={0.45}
              showUSD
            />
            <ExchangeRateCard
              title="PLATA"
              buyPrice="22,85"
              sellPrice="22,83"
              spread="$0,02"
              lastUpdate="Hace 5 minutos"
              change={-0.32}
              showUSD
            />
            <ExchangeRateCard
              title="PETRÓLEO WTI"
              buyPrice="76,84"
              sellPrice="76,82"
              spread="$0,02"
              lastUpdate="Hace 5 minutos"
              change={1.24}
              showUSD
            />
            <ExchangeRateCard
              title="SOJA"
              buyPrice="452,75"
              sellPrice="452,50"
              spread="$0,25"
              lastUpdate="Hace 5 minutos"
              change={-0.68}
              showUSD
            />
            <ExchangeRateCard
              title="MAÍZ"
              buyPrice="175,25"
              sellPrice="175,00"
              spread="$0,25"
              lastUpdate="Hace 5 minutos"
              change={0.86}
              showUSD
            />
            <ExchangeRateCard
              title="TRIGO"
              buyPrice="224,30"
              sellPrice="224,10"
              spread="$0,20"
              lastUpdate="Hace 5 minutos"
              change={-1.24}
              showUSD
            />
          </div>
        </TabsContent>

        <TabsContent value="acciones">
          <h2 className="text-3xl font-bold text-center mb-2 text-emerald-400">Acciones Líderes</h2>
          <p className="text-center text-gray-400 mb-8">Principales acciones del mercado argentino</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ExchangeRateCard
              title="GGAL"
              buyPrice="875,50"
              sellPrice="874,00"
              spread="$1,50"
              lastUpdate="Hace 15 minutos"
              change={2.34}
            />
            <ExchangeRateCard
              title="YPF"
              buyPrice="945,25"
              sellPrice="944,00"
              spread="$1,25"
              lastUpdate="Hace 15 minutos"
              change={-1.56}
            />
            <ExchangeRateCard
              title="PAMP"
              buyPrice="456,75"
              sellPrice="456,00"
              spread="$0,75"
              lastUpdate="Hace 15 minutos"
              change={0.89}
            />
            <ExchangeRateCard
              title="BBAR"
              buyPrice="785,50"
              sellPrice="784,75"
              spread="$0,75"
              lastUpdate="Hace 15 minutos"
              change={-0.45}
            />
            <ExchangeRateCard
              title="BMA"
              buyPrice="1125,75"
              sellPrice="1124,50"
              spread="$1,25"
              lastUpdate="Hace 15 minutos"
              change={1.23}
            />
            <ExchangeRateCard
              title="TXAR"
              buyPrice="345,25"
              sellPrice="344,75"
              spread="$0,50"
              lastUpdate="Hace 15 minutos"
              change={-0.78}
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* Progress bar */}
      <div className="max-w-md mx-auto mt-12">
        <div className="h-1 bg-gray-800 rounded">
          <div className="h-1 bg-emerald-500 rounded w-4/5"></div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-2">Próxima actualización en 5 minutos</p>
      </div>
    </div>
  )
}

interface MarketIndicatorProps {
  name: string
  value: string
  change: number
  flag: string
  showBuy?: boolean
}

function MarketIndicator({ name, value, change, flag, showBuy }: MarketIndicatorProps) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <span>{flag}</span>
            <span className="text-sm font-medium">{name}</span>
          </div>
          {showBuy && (
            <Button size="sm" variant="secondary" className="bg-pink-500 hover:bg-pink-600 text-white text-xs">
              COMPRAR
            </Button>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{value}</span>
          <span className={`flex items-center ${change > 0 ? "text-emerald-500" : "text-red-500"}`}>
            {change > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            {Math.abs(change)}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

interface ExchangeRateCardProps {
  title: string
  buyPrice: string
  sellPrice: string
  spread?: string
  lastUpdate: string
  change: number
  variant?: "default" | "highlight"
  reference?: boolean
  showUSD?: boolean
}

function ExchangeRateCard({
  title,
  buyPrice,
  sellPrice,
  spread,
  lastUpdate,
  change,
  variant = "default",
  reference = false,
  showUSD = false,
}: ExchangeRateCardProps) {
  return (
    <Card
      className={`${
        variant === "highlight" ? "bg-slate-900/50 border-emerald-500/50" : "bg-slate-900 border-slate-800"
      }`}
    >
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{title}</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Información detallada sobre {title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            {lastUpdate}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">{reference ? "VALOR DE REFERENCIA" : "VENDÉ A:"}</p>
            <p className="text-2xl font-bold">
              {showUSD ? "USD " : "$ "}
              {sellPrice}
            </p>
          </div>
          {!reference && (
            <div>
              <p className="text-sm text-gray-400 mb-1">COMPRÁ A:</p>
              <p className="text-2xl font-bold text-emerald-400">
                {showUSD ? "USD " : "$ "}
                {buyPrice}
              </p>
            </div>
          )}
        </div>
        {spread && (
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
            <span>Spread: {spread}</span>
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
              <Copy className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
          <span className={`flex items-center ${change > 0 ? "text-emerald-500" : "text-red-500"}`}>
            {change > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            {Math.abs(change)}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

